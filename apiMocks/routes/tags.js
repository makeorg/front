const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const tagsRouter = jsonServer.create();

tagsRouter.get('/', (req, res) => {
  return res.send(fixtures.tags);
});

module.exports = tagsRouter;
