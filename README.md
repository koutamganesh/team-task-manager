# Team Task Manager

## Project Overview
Team Task Manager is a full-stack web application developed to manage projects and tasks efficiently within a team. The application allows users to register, login, create tasks, update task status, and monitor progress through a dashboard.

---

## Features
- User Registration & Login
- JWT Authentication
- Role-Based Access Control
- Create and Manage Tasks
- Update Task Status
- Dashboard Analytics
  - Total Tasks
  - Pending Tasks
  - Completed Tasks
  - Overdue Tasks
- Responsive User Interface
- Fully Deployed Application

---

## Tech Stack

### Frontend
- React.js
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JWT (JSON Web Token)

### Deployment
- Frontend: Netlify
- Backend: Railway

---

## Live Application URL
https://etharaproject.netlify.app

---

## GitHub Repository
https://github.com/your-username/your-repository-name

---

## Installation Steps

### Backend Setup
1. Navigate to server folder
2. Install dependencies:
   npm install
3. Create .env file
4. Start server:
   npm start

### Frontend Setup
1. Navigate to client folder
2. Install dependencies:
   npm install
3. Start frontend:
   npm start

---

## Environment Variables

PORT=8000
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=your_secret_key

---

## API Endpoints

### Authentication
POST /api/auth/register
POST /api/auth/login

### Tasks
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id

### Projects
GET /api/projects
POST /api/projects

---

## Deployment Links
Frontend deployed on Netlify
Backend deployed on Railway

## Author
Koutam Ganesh