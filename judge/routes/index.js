// imports
var express = require('express');
var router = express.Router();
const { listAllProblems, readProblem } = require('../util/listfile');
const executeSourceCode = require('../util/executor');

// the home route
router.get('/', function(_, res, _) {
  res.render('index', { problems: listAllProblems()});
});

// HTTP REST Endpoint: retrieve a problem
router.post('/problem', function(req, res, _) {
  let path = req.body.path;
  let problem = readProblem(path);
  res.status(200).send(problem);
});

// HTTP REST Endpoint: executes user's source code
router.post('/execute', function(req, res, _) {
  let { sourceCode, language, problemId } = req.body;
  let result = executeSourceCode({ sourceCode, language, problemId });
  res.status(200).send(result);
});


// export the router
module.exports = router;
