const express = require('express');
const Enrollment = require('../models/Enrollment.js');
const auth = require('../middleware/auth');
const router = express.Router();

// Enroll in a Course
router.post('/', auth, async (req, res) => {
    const { courseId } = req.body;
    const newEnrollment = new Enrollment({ userId: req.user.id, courseId });
    await newEnrollment.save();
    res.status(201).json(newEnrollment);
});

// Track Lesson Completion
router.post('/completion', auth, async (req, res) => {
    const { courseId, lessonId } = req.body;
    const enrollment = await Enrollment.findOne({ userId: req.user.id, courseId });
    if (!enrollment) return res.status(404).send('Enrollment not found');

    const lessonCompletion = enrollment.completionStatus.find(comp => comp.lessonId.equals(lessonId));
    if (lessonCompletion) {
        lessonCompletion.completed = true;
    } else {
        enrollment.completionStatus.push({ lessonId, completed: true });
    }
    await enrollment.save();
    res.json(enrollment);
});

module.exports = router;
