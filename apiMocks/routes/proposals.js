const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const proposalsRouter = jsonServer.create();

proposalsRouter.use('/:proposalId/vote', (req, res) => {
  return res.send({
    ...fixtures.vote,
    hasVoted: true,
    voteKey: req.body.voteKey,
  });
});

proposalsRouter.use('/:proposalId/unvote', (req, res) => {
  return res.send({
    ...fixtures.vote,
    hasVoted: false,
    voteKey: req.body.voteKey,
  });
});

proposalsRouter.use('/:proposalId/qualification', (req, res) => {
  return res.send({
    ...fixtures.vote.qualifications.find(
      qualification =>
        qualification.qualificationKey === req.body.qualificationKey
    ),
    hasQualified: true,
  });
});

proposalsRouter.use('/:proposalId/unqualification', (req, res) => {
  return res.send({
    ...fixtures.vote.qualifications.find(
      qualification =>
        qualification.qualificationKey === req.body.qualificationKey
    ),
    hasQualified: false,
  });
});

proposalsRouter.use('/:proposalId', (req, res) => {
  return res.send({
    ...fixtures.proposals.find(
      proposal => proposal.id === req.params.proposalId
    ),
    hasQualified: false,
  });
});

proposalsRouter.use('/', (req, res) => {
  const proposalsOfQuestion = fixtures.proposals.filter(
    proposal => proposal.question.questionId === req.query.questionId
  );
  const proposals = proposalsOfQuestion.slice(
    parseInt(req.query.skip, 10),
    parseInt(req.query.limit, 10) + parseInt(req.query.skip, 10)
  );
  return res.send({
    total: proposalsOfQuestion.length,
    results: proposals,
  });
});

module.exports = proposalsRouter;
