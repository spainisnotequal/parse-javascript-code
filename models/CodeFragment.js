const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CodeFragmentSchema = new Schema({
  author: {
    type: String,
    max: 100,
    default: ''
  },
  source: {
    type: String,
    max: 200,
    default: ''
  },
  code: {
    type: String,
    required: true
  },
  ast: {
    type: Object
  }
});

// Export the model to be able to import it in other files
module.exports = CodeFragment = mongoose.model('codeFragment', CodeFragmentSchema);
