// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var UserSchema = new Schema({

  // Title of Article
  name: {
    type: String,
    required: true
  },

  // Date of Article
  password: {
    type: String,
    required: true
  }

});

// Create the Article model with Mongoose
var User = mongoose.model('User', UserSchema);

// Export the Model
module.exports = User;