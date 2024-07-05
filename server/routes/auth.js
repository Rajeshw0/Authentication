const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
// test url 
router.get('/', async(req,res)=>{
    res.send("hello what is up bro....")
})
// Register Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Login Route
router.post('/login', passport.authenticate('local', {
     successRedirect: '/api/auth/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

// Logout Route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

// Profile Route
router.get('/profile', (req, res) => {
    try {
        if (req.isAuthenticated()) {
            res.status(200).json({ user: req.user });
        } else {
            console.log("unautharised")
        }
    } catch (error) {
        res.status(401).send(error);
    }
   
});

module.exports = router;
