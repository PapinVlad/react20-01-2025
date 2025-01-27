const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = express.Router();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('MySQL connected...');
});

// Handle user registration
router.post('/', async (req, res) => {
    const {
        firstName,
        surName,
        dob,
        hospitalNumber,
        email,
        telephoneNumber,
        password,
        address,
        gender,
        role,
        status
    } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcrypt

        const query = `
            INSERT INTO users (
                firstName, surName, dob, hospitalNumber, email, telephoneNumber, password, address, gender, role, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(
            query, 
            [
                firstName, surName, dob, hospitalNumber, email, telephoneNumber, hashedPassword, address, gender, role, status
            ], 
            (err) => {
                if (err) {
                    console.error('Error inserting user:', err);
                    res.status(500).json({ message: 'An error occurred during registration' });
                } else {
                    res.status(200).json({ message: 'User registered successfully' });
                }
            }
        );
    } catch (error) { // Handle any errors that occur during the registration process
        console.error('Error hashing password:', error);
        return res.status(500).json({ message: 'An error occurred during registration' });
    }
});

module.exports = router;