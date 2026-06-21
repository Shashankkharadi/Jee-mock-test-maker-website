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

## Quickstart

1. cp .env.example .env and fill values
2. Build and run with Docker Compose (recommended):

```bash
docker compose build
docker compose up -d
```

> Note: `docker-compose.yml` uses Compose V2 syntax and does not require a top-level `version` field.

3. OR run locally without Docker:

```bash
# Frontend
cd frontend
npm install
npm run build
npm start

# Backend (in a separate terminal)
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```
