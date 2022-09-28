// imports
var express = require('express');
var router = express.Router();
const { listAllProblems, readProblem } = require('../util/listfile');

// the home route
router.get('/', function(_, res, _) {
  res.render('index', { problems: listAllProblems()});
});

// retrieve a problem
router.post('/problem', function(req, res, _) {
  let path = req.body.path;
  console.log(path);
  let problem = readProblem(path);
  res.status(200).send(problem);
});

// export the router
module.exports = router;
