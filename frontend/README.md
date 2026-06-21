# Frontend (Next.js) for JEE Mock Test Maker

This folder contains a minimal Next.js frontend and a simple API route that uses Mongoose to store/fetch mock tests.

Quick start:

1. cd frontend
2. cp .env.example .env.local
3. Update MONGODB_URI in .env.local to point to your MongoDB (e.g. mongodb://localhost:27017/smartmocktestmaker)
4. npm install
5. npm run dev

Notes:
- The API route is at /api/mocktests and supports GET and POST.
- You can reuse the existing backend code or keep the original Python FastAPI service; this Next app provides a Node/Mongoose alternative that keeps frontend and a simple API together.
