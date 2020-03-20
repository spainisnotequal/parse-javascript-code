const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CodeFragmentSchema = new Schema({
  author: {
    type: String,
    max: 100
  },
  source: {
    type: String,
    max: 200
  },
  code: {
    type: String,
    required: true
  },
  ast: {
    type: String
  }
});

// Export the model to be able to import it in other files
module.exports = CodeFragment = mongoose.model('codeFragment', CodeFragmentSchema);
