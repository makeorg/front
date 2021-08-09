const jsonServer = require('json-server');
const proposalsRouter = require('./routes/proposals');
const questionsRouter = require('./routes/questions');
const userRouter = require('./routes/user');
const tagsRouter = require('./routes/tags');
const organisationsRouter = require('./routes/organisations');
const viewsRouter = require('./routes/views');
const oauthRouter = require('./routes/oauth');
const sequenceRouter = require('./routes/sequence');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ logger: false });

server.use(jsonServer.bodyParser);
server.use(middlewares);
// cors headers
server.use((req, res, next) => {
  res.header(
    'access-control-expose-headers',
    'x-request-id, x-route-name, x-route-time, x-make-external-id, x-session-id, x-session-id-expiration, x-total-count, x-visitor-created-at, x-visitor-id'
  );
  next();
});
// custom headers
server.use((req, res, next) => {
  res.header('x-visitor-id', 'fake-visitor-id');
  next();
});
server.use('/questions', questionsRouter);
server.use('/user', userRouter);
server.use('/proposals', proposalsRouter);
server.use('/tags', tagsRouter);
server.use('/organisations', organisationsRouter);
server.use('/views', viewsRouter);
server.use('/sequences', sequenceRouter);
server.use('/tracking/front', (req, res) => res.sendStatus(204));
server.use('/tracking/demographics', (req, res) => res.sendStatus(204));
server.use(
  jsonServer.rewriter({
    '/:resource\\?:params': '/:resource/data?:params',
    '/:resource': '/:resource/data',
  })
);
server.use('/oauth', oauthRouter);
server.use('/logout', (req, res) => {
  res.clearCookie('mockIsConnected').sendStatus('204');
});
server.listen(9000, () => {
  console.log('JSON Server is running');
});
