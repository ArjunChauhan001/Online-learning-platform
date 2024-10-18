const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const courseRoutes = require('./routes/courses.js');
const enrollmentRoutes = require('./routes/enrollments.js');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('online learning platform');
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () =>
     console.log(`Server running on port ${port}`)
);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTJlMTMyNDNiMjAxYTFkMGFlMzIxNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI5MjkwNTgwfQ.TYiPQsst-JkhUE98aAMSk7L0_AoBdr4aSI3b46cAmeQ