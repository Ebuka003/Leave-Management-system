
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Admin dashboard
router.get('/dashboard', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/'); // Redirect to login if not authenticated
    }
    const employees = await Employee.find();
    res.render('dashboard', { employees }); // Pass employee data to the dashboard view
});
