# Smart Mock Test Maker

Modern, responsive mock test platform for JEE/NEET/CUET and more.
- Next.js 14 (App Router) + TypeScript
- FastAPI backend
- PostgreSQL + Prisma
- Dark/Light theme, adaptive tests, analytics

## Prerequisites

Before getting started, ensure you have the following installed on your system:

### Node.js Installation

#### **Windows or macOS**
1. Visit the [official Node.js website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts

#### **Linux (Ubuntu/Debian)**
```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### **macOS (Homebrew)**
```bash
brew install node
```

#### **Verify Installation**
```bash
node -v
npm -v
```

### MongoDB Community Server Installation

#### **Windows**
1. Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. Run the MSI installer
3. Choose **"Complete"** installation
4. Create data directory at `C:\data\db`
5. MongoDB runs as a Windows service automatically

#### **macOS (Homebrew)**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### **Ubuntu/Debian**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

## Getting Started

✅ **Node.js is installed on your PC**  
✅ **MongoDB Community Server is installed on your PC**

You're now ready to start developing! Follow the steps below to set up and run the project.

### Installation Steps

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Shashankkharadi/Jee-mock-test-maker-website.git
   cd Jee-mock-test-maker-website
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Fill in the required values in the `.env` file.

3. **Ensure MongoDB is running**:
   - **Windows**: MongoDB should be running as a service. Start it via Services if needed.
   - **macOS**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

4. **Verify MongoDB is running**:
   ```bash
   mongosh
   ```
   If the MongoDB shell connects successfully, MongoDB is ready.

## Quickstart

### Option 1: Using Docker Compose (Recommended)

```bash
docker compose build
docker compose up -d
```

> Note: `docker-compose.yml` uses Compose V2 syntax and does not require a top-level `version` field.

### Option 2: Run Locally without Docker

```bash
# Frontend (in terminal 1)
cd frontend
npm install
npm run build
npm start

# Backend (in terminal 2)
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Your application should now be running! 🚀

## Project Structure

```
Jee-mock-test-maker-website/
├── frontend/                       # Next.js 14 frontend application
│   ├── app/                        # App Router directory
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   ├── (auth)/                # Auth routes group
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── (dashboard)/           # Dashboard routes group
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── tests/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   └── settings/page.tsx
│   │   └── api/                   # API routes
│   │       └── [...slug].ts
│   ├── components/                # React components
│   │   ├── common/               # Shared components
│   │   ├── auth/                 # Auth components
│   │   ├── test/                 # Test-related components
│   │   └── ui/                   # UI components
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   │   ├── api.ts               # API client
│   │   ├── auth.ts              # Auth utilities
│   │   └── utils.ts             # Helper functions
│   ├── styles/                    # Global styles
│   ├── public/                    # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/                       # FastAPI backend application
│   ├── app/
│   │   ├── main.py               # FastAPI app entry point
│   │   ├── config.py             # Configuration settings
│   │   ├── database.py           # Database connection
│   │   ├── models/               # Pydantic models
│   │   │   ├── user.py
│   │   │   ├── test.py
│   │   │   └── question.py
│   │   ├── routes/               # API endpoints
│   │   │   ├── auth.py
│   │   │   ├── tests.py
│   │   │   ├── questions.py
│   │   │   └── users.py
│   │   ├── services/             # Business logic
│   │   │   ├── test_service.py
│   │   │   ├── user_service.py
│   │   │   └── analytics_service.py
│   │   ├── schemas/              # Request/response schemas
│   │   └── middleware/           # Custom middleware
│   ├── requirements.txt
│   └── .env.example
│
├── docker-compose.yml            # Docker Compose configuration
├── .env.example                  # Environment variables template
├── .gitignore
└── README.md                      # This file
```

### Key Directories Explained

- **frontend/app**: Contains all Next.js pages and layouts using App Router
- **frontend/components**: Reusable React components organized by feature
- **frontend/lib**: Utility functions, API clients, and helper functions
- **backend/app**: FastAPI application structure with routes and services
- **backend/app/routes**: API endpoint handlers for different features
- **backend/app/services**: Business logic and database operations

smart-mock-test-maker/

├── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── services/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
└── database/
    └── mongodb collections
