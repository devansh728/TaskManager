# Task Manager App

A full-stack, production-ready MERN Task Manager application with JWT authentication, secure CRUD for tasks, modern UI, and Docker support.

## Architecture Diagram
```mermaid
graph TD
  A[React Frontend (Vite, Tailwind, Framer Motion, Toast)] -- Axios HTTP --> B[Node.js/Express Backend]
  B -- Mongoose ODM --> C[(MongoDB Atlas)]
  B -- JWT Auth --> D[User]
  subgraph Docker
    A
    B
  end
```

## Tech Stack
- **Frontend:** React, Vite, Axios, React Router, TailwindCSS, Framer Motion, React Hot Toast
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcrypt
- **DevOps:** Docker, Nginx (for frontend static serving)

## Features
- User registration and login (JWT access & refresh tokens)
- Secure authentication and protected dashboard
- CRUD operations for tasks (Add, Edit, Delete, Mark Complete/Incomplete)
- Responsive, modern, and aesthetic UI (mobile, tablet, desktop)
- Toast notifications and smooth animations
- Dockerized setup for both frontend and backend
- Clean code, SOLID principles, scalable architecture

## Project Structure
```
/ (root)
├── backend/           # Node.js/Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── Dockerfile
├── src/               # React frontend
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile         # Frontend Dockerfile
├── docker-compose.yml # Multi-container orchestration
├── .dockerignore
├── nginx.conf         # For frontend static serving
└── README.md
```

## Local Development Setup

### 1. Frontend
```sh
npm install
npm run dev
```
Runs on [http://localhost:5173](http://localhost:5173)

### 2. Backend
```sh
cd backend
npm install
npm run dev
```
Runs on [http://localhost:5000](http://localhost:5000)

### 3. Docker (Production Build)
```sh
docker-compose up --build
```
- Frontend served on port 80
- Backend served on port 5000

## API Endpoints
- `POST   /api/auth/register` — Register user
- `POST   /api/auth/login` — Login user
- `POST   /api/auth/refresh-token` — Refresh JWT
- `GET    /api/tasks` — Get tasks (auth required)
- `POST   /api/tasks` — Add task
- `PUT    /api/tasks/:id` — Update task
- `DELETE /api/tasks/:id` — Delete task

## How It Works
- **Authentication:** JWT (access & refresh tokens) for secure login/session.
- **State Management:** React Context for auth, hooks for forms.
- **UI/UX:** TailwindCSS for styling, Framer Motion for animation, Toast for notifications.
- **Backend:** Express REST API, Mongoose for MongoDB, SOLID and clean code.
- **Docker:** Multi-stage builds for optimized images, Nginx for static frontend, easy orchestration.

## License
MIT
