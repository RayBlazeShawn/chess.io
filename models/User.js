// Import Mongoose library to create the database schema
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); // Require the passport-local-mongoose module

// Create a Schema object to structure our documents in the database
const Schema = mongoose.Schema;

// Define the schema for User collection
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
});

// Apply the passport-local-mongoose plugin to the UserSchema
UserSchema.plugin(passportLocalMongoose);

// Export the User model, so it can be used in other files
module.exports = mongoose.model('User', UserSchema);
