// Import necessary modules and files
const User = require('../models/User'); // User model
const bcrypt = require('bcrypt'); // Library for hashing passwords
const passport = require('passport'); // Authentication library
const LocalStrategy = require('passport-local').Strategy; // Strategy for authenticating with a username and password

// Setup Passport's local strategy for user authentication. This tells Passport to use the local strategy
// and use the authenticate method of the User model to verify the username and password.
passport.use(new LocalStrategy(User.authenticate()));

// Serialize and deserialize methods for Passport sessions.
// serializeUser determines what data of the user object should be stored in session.
// deserializeUser is invoked on every request by Passport, which enables it to check if the logged in user is valid.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// User signup controller logic
exports.signup = async (req, res) => {
    // Destructure username and password from the request body
    const { username, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User object
    const newUser = new User({
        username,
        password: hashedPassword
    });

    // Save the new user to the database, send the saved user as the response, or an error status if there is an error.
    try {
        const savedUser = await newUser.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

// User login controller logic
exports.login = (req, res, next) => {
    // Use Passport's authenticate method to log in the user. If there is an error, throw the error.
    // If the user does not exist, send a response saying "No User Exists".
    // If the user exists, log in the user and send a response saying "Successfully Authenticated".
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
};
