const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_registration'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('MySQL connected...');
});

// Handle user registration
app.post('/register', async (req, res) => {
  const {
    fullName,
    surName,
    dob,
    hospitalNumber,
    email,
    departmentId,
    telephoneNumber,
    password,
    address,
    gender,
    profilePicture,
    emergencyContact,
    role,
    status
  } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users SET ?';
    const user = {
      fullName,
      surName,
      dob,
      hospitalNumber,
      email,
      departmentId,
      telephoneNumber,
      password: hashedPassword,
      address,
      gender,
      profilePicture,
      emergencyContact,
      role,
      status
    };

    db.query(sql, user, (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Registration failed');
      }
      res.send('User registered successfully');
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send('Registration failed');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});