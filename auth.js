
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Employee = require('../models/Employee');

// Register
router.post('/register', async (req, res) => {
    const { name, id, password } = req.body;
    const newEmployee = new Employee({ name, id, password });
    await newEmployee.save();
    req.flash('success', 'Registration successful! You can now log in.');
    res.redirect('/'); // Redirect to home or login page
});

// Login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/leave/dashboard',
    failureRedirect: '/',
    failureFlash: true,
}));

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged out successfully.');
    res.redirect('/');
});

// Export the router
module.exports = router;
