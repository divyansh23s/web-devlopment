const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// routes/auth.js
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const User = require('../models/User')

// Register
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

//Login
// router.post('/login', async(req, res)=>{
//     const {email,password} = req.body;
//     try{
//         const user = await User.findOne({email});
//         if(!user) return res.status(400).json({ message: 'user already exists '});

//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch) return res.status(400).json({ message: 'Invalid Credentials '});
        
//         res.status(200).json({ message: 'login successfully'});
//     }
//     catch (err) {
//         res.status(500).json({ message: 'Server error'});
//     }
// })

// Get all users (testing purpose only)
// router.get('/all', async(req, res)=>{
//     try{
//         const users = await User.find().select('-password');
//     }
//     catch (err) {
//         res.status(500).json({ message: 'Server error'});
//     }
// })

// module.exports = router;