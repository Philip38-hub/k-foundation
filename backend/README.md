# NGO Website Backend

This is the backend service for the NGO website built with Go.

## Setup Instructions

1. Make sure Go is properly installed and in your PATH:
```bash
# Add Go to your PATH (add this to your ~/.bashrc or ~/.zshrc)
export PATH=$PATH:/usr/local/go/bin

# Reload your shell configuration
source ~/.bashrc  # or source ~/.zshrc if using zsh

# Verify Go installation
go version
```

2. Initialize the project:
```bash
cd backend
go mod init ngo-website
go mod tidy
```

3. Install dependencies:
```bash
go get -u github.com/gin-gonic/gin
go get -u github.com/gin-contrib/cors
go get -u github.com/lib/pq
go get -u github.com/golang-jwt/jwt/v5
go get -u golang.org/x/crypto
```

4. Run the server:
```bash
cd cmd/api
go run main.go
```

## Project Structure

```
backend/
├── cmd/
│   └── api/
│       └── main.go         # Main application entry point
├── internal/
│   ├── handlers/          # HTTP handlers
│   ├── models/            # Data models
│   └── database/         # Database interactions
└── configs/
    └── config.go         # Configuration management
```

## API Endpoints

### Public Routes
- GET /api/programs - Get all programs
- GET /api/events - Get all events
- POST /api/contact - Submit contact form
- POST /api/donate - Process donation

### Protected Routes (requires authentication)
- POST /api/admin/programs - Create program
- PUT /api/admin/programs/:id - Update program
- DELETE /api/admin/programs/:id - Delete program

## Development

The server runs on port 8080 by default and accepts requests from the frontend running on port 3000.
