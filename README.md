# NGO Website

A full-stack web application for a non-profit organization, built with React and Go.

## Project Structure

```
ngo-website/
├── frontend/                # React frontend application
│   ├── src/                # Source files
│   ├── public/             # Static files
│   ├── index.html         
│   ├── package.json       
│   ├── tailwind.config.js 
│   └── vite.config.js     
│
├── backend/                # Go backend application
│   ├── cmd/
│   │   └── api/           # Main application entry point
│   ├── internal/
│   │   ├── handlers/      # HTTP handlers
│   │   ├── models/        # Data models
│   │   └── database/      # Database interactions
│   └── configs/           # Configuration management
│
└── README.md              # This file
```

## Setup Instructions

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on http://localhost:3000

### Backend Setup
```bash
cd backend
go mod tidy
cd cmd/api
go run main.go
```
The backend will run on http://localhost:8080

## Development

### Frontend
- Built with React + Vite
- Styled with Tailwind CSS
- Modern, responsive design
- Component-based architecture

### Backend
- Built with Go
- Uses Gin web framework
- RESTful API design
- Structured for scalability

## Available API Endpoints

### Public Routes
- GET /api/programs - Get all programs
- GET /api/events - Get all events
- POST /api/contact - Submit contact form
- POST /api/donate - Process donation

### Protected Routes (requires authentication)
- POST /api/admin/programs - Create program
- PUT /api/admin/programs/:id - Update program
- DELETE /api/admin/programs/:id - Delete program
