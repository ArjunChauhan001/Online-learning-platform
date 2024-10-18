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
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 100px auto; text-align: center; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333;">Welcome to Online Learning Application!</h1>
        <p style="color: #666;">We are glad to have you here. Explore and enjoy!</p>
        <a href="https://github.com/ArjunChauhan001/Online-learning-platform"style="padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Get Started
        </a>
        <p style="color: #666; margin-top: 20px ;">created by <span>Arjun Chauhan</span></p>
    </div>

</body>
</html>
`);
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
