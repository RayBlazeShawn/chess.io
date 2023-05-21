// Import Mongoose library to create the database schema
const mongoose = require('mongoose');

// Create a Schema object to structure our documents in the database
const Schema = mongoose.Schema;

// Define the schema for User collection
const UserSchema = new Schema({
    username: {
        type: String, // The datatype of username is string
        required: true, // Username is a mandatory field
        unique: true, // Username must be unique across all documents
    },
    password: {
        type: String, // The datatype of password is string
        required: true // Password is a mandatory field
    }
});

// Export the User model, so it can be used in other files
module.exports = mongoose.model('User', UserSchema);
