const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./config/passport'); // Adjust path as needed
const authRoutes = require('./routes/auth');
const flash = require('connect-flash');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(flash());
// Middleware
app.use(express.json());
// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.get("/profile",(req,res)=>{
    res.status(200).send("hello profile")
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
