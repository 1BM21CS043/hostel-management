const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://chandrasekhar:chandrasekhar@hostel.3xv4xl5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a schema for the user
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true },
  address: { type: String, required: true },
  guardian_name: { type: String, required: true },
  guardian_contact: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, usn, address, guardian_name, guardian_contact, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ usn });
    if (existingUser) {
      return res.status(409).json({ error: 'USN already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      usn,
      address,
      guardian_name,
      guardian_contact,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { usn, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ usn });
    if (!user) {
      return res.status(401).json({ error: 'Invalid USN or Password' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid USN or Password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
