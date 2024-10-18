# Course Management API

This is a RESTful API built with Express.js for managing users and courses, including user authentication, course CRUD operations, enrollment, and lesson completion tracking.

## Features

- **User Authentication**
  - Register new users
  - User login with JWT
  - Password reset functionality

- **Course Management (Admin only)**
  - Create, Read, Update, Delete (CRUD) operations for courses

- **User Enrollment**
  - Users can enroll in courses

- **Lesson Tracking**
  - Track completion of lessons for each enrolled user

## Technology Stack

- **Node.js** with **Express.js** for building the API
- **MongoDB** for the database
- **JWT** (JSON Web Tokens) for secure user authentication

## Database Models

### User Model
- `username`: String
- `email`: String
- `password`: String
- `enrolledCourses`: [Course IDs]

### Course Model
- `title`: String
- `description`: String
- `lessons`: [Lesson IDs]
- `createdBy`: User ID

### Lesson Model
- `title`: String
- `content`: String
- `courseId`: Course ID

### Enrollment Model
- `userId`: User ID
- `courseId`: Course ID
- `progress`: Number (percentage of completion)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArjunChauhan001/Online-learning-platform.git

## .env
PORT=5000

MONGO_URI=mongodb+srv://arjunchauhan2755:oRkbYvppKCX24qnV@cluster0.q7wll.mongodb.net/online_learning

MONGO_PASS=oRkbYvppKCX24qnV

JWT_SECRET=real_to_hard_to_guess
