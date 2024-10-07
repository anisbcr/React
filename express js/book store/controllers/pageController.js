const User = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');

// Inscription d'un utilisateur
exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    
    await newUser.save();
    res.redirect('/login');
};

// Connexion d'un utilisateur
exports.login = passport.authenticate('local', {
    successRedirect: '/shop',
    failureRedirect: '/login'
});
