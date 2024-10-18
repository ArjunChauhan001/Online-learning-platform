const express = require('express');
const Course = require('../models/Course.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

// Middleware for admin check
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied');
    next();
};

// Create Course
router.post('/', auth, isAdmin, async (req, res) => {
    const { title, description } = req.body;
    const newCourse = new Course({ title, description, createdBy: req.user.id });
    await newCourse.save();
    res.status(201).json(newCourse);
});

// Get All Courses
router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

// Get Course by ID
router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
});

// Update Course
router.put('/:id', auth, isAdmin, async (req, res) => {
    const { title, description } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(updatedCourse);
});

// Delete Course
router.delete('/:id', auth, isAdmin, async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.send('Course deleted');
});

module.exports = router;
