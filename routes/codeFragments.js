const express = require('express');
const router = express.Router();
const parseGithubURL = require('parse-github-url');
const acorn = require("acorn");

// CodeFragment Model
const CodeFragment = require('../models/CodeFragment');

// @route        GET api/codeFragments
// @description  Get all code fragments
// @acces        Public
router.get('/', (req, res) => {
  CodeFragment.find()
    .sort({ date: -1})
    .then(fragments => res.json(fragments))
});

// @route        POST api/codeFragments
// @description  Create a code fragment
// @acces        Public
router.post('/', (req, res) => {
  const { source, code } = req.body;
  const { owner } = parseGithubURL(source);
  console.log(owner);
  const ast = acorn.parse(code);
  const newCodeFragment = new CodeFragment({
    author: owner,
    source,
    code,
    ast
  });

  newCodeFragment.save().then(codeFragment => res.json(codeFragment));
});

// @route        DELETE api/codeFragments/:id
// @description  Delete a code fragment
// @acces        Public
router.delete('/:id', (req, res) => {
  CodeFragment.findById(req.params.id)
    .then(codeFragment => codeFragment.remove().then(() => res.json({ sucess: true })))
    .catch(error => res.status(404).json({ sucess: false }));
});


module.exports = router;
