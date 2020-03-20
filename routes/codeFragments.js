const express = require('express');
const router = express.Router();

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


module.exports = router;
