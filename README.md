# Smart Mock Test Maker

Modern, responsive mock test platform for JEE/NEET/CUET and more.
- Next.js 14 (App Router) + TypeScript
- FastAPI backend
- PostgreSQL + Prisma
- Dark/Light theme, adaptive tests, analytics

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
