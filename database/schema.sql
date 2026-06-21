-- PostgreSQL schema for JEE Mock Test Maker

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  hashed_pass TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  preferences JSONB
);

CREATE TABLE questions (
  id TEXT PRIMARY KEY,
  exam TEXT NOT NULL,
  class_level TEXT NOT NULL,
  subject TEXT NOT NULL,
  chapter TEXT,
  difficulty TEXT NOT NULL,
  type TEXT NOT NULL,
  source TEXT NOT NULL,
  prompt TEXT NOT NULL,
  options JSONB,
  answer TEXT,
  solution TEXT
);

CREATE TABLE tests (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  config JSONB NOT NULL,
  duration_sec INT NOT NULL,
  negative_mark BOOLEAN NOT NULL DEFAULT FALSE,
  pattern TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE test_questions (
  id TEXT PRIMARY KEY,
  test_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  index INT NOT NULL,
  FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE attempts (
  id TEXT PRIMARY KEY,
  test_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  responses JSONB NOT NULL,
  score DOUBLE PRECISION NOT NULL,
  accuracy DOUBLE PRECISION NOT NULL,
  time_per_q_sec JSONB,
  topic_analysis JSONB,
  rank_estimate DOUBLE PRECISION,
  FOREIGN KEY (test_id) REFERENCES tests(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

