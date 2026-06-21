# MongoDB Import Guide for JEE Mock Test Maker

This guide will help you import your database into MongoDB Atlas.

## Prerequisites

- MongoDB Atlas account (create at https://www.mongodb.com/cloud/atlas)
- MongoDB CLI tools installed (`mongoimport`)
- Your connection string from MongoDB Atlas

## Step 1: Get Your MongoDB Connection String

1. Go to MongoDB Atlas → Your Cluster → **Connect**
2. Choose **Compass** or **MongoDB Shell** → Connection String
3. Your URI will look like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dbname
   ```

## Step 2: Import Collections

Replace the placeholders with your actual values:

### Import Users Collection
```bash
mongoimport --uri "mongodb+srv://shashankkharadi91_db_user:<password>@cluster0.8wwlsyi.mongodb.net/smartmocktestmaker" \
  --collection users \
  --type JSON \
  --file database/users.json \
  --jsonArray
```

### Import Questions Collection
```bash
mongoimport --uri "mongodb+srv://shashankkharadi91_db_user:<password>@cluster0.8wwlsyi.mongodb.net/smartmocktestmaker" \
  --collection questions \
  --type JSON \
  --file database/questions.json \
  --jsonArray
```

## Step 3: Verify Import

### Connect to MongoDB Compass or CLI
```bash
mongosh "mongodb+srv://shashankkharadi91_db_user:<password>@cluster0.8wwlsyi.mongodb.net/smartmocktestmaker"
```

### Check collections
```javascript
show collections
db.users.find()
db.questions.find()
```

## Collections Schema

### Users Collection
```json
{
  "_id": "string",
  "name": "string",
  "email": "string (unique)",
  "hashed_pass": "string",
  "created_at": "ISO Date",
  "updated_at": "ISO Date",
  "preferences": {
    "theme": "string",
    "notifications": "boolean"
  }
}
```

### Questions Collection
```json
{
  "_id": "string",
  "exam": "string (JEE Main/Advanced)",
  "subject": "string (Physics/Chemistry/Mathematics)",
  "chapter": "string",
  "difficulty": "string (Easy/Medium/Hard)",
  "type": "string (MCQ/Numeric/Matrix)",
  "source": "string (PYQ/Mock)",
  "prompt": "string",
  "options": ["string"],
  "answer": "string",
  "solution": "string"
}
```

## Environment Variables

Update your `.env.local` in the frontend folder:

```env
MONGODB_URI=mongodb+srv://shashankkharadi91_db_user:<password>@cluster0.8wwlsyi.mongodb.net/smartmocktestmaker
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Troubleshooting

### Connection Refused
- Check if your MongoDB Atlas cluster is running
- Verify IP whitelist includes your IP address
- Check username and password

### Import Failed
- Ensure JSON files are valid (use `jq` to validate)
- Check file paths are correct
- Verify collection doesn't already exist or use `--drop` to replace

### Permission Denied
- Ensure MongoDB user has database access privileges
- Check role is "atlasAdmin" or appropriate database role

## Next Steps

1. Import additional collections as needed
2. Create indexes for better query performance
3. Set up MongoDB Realm (optional) for backend services
4. Connect your Next.js backend to MongoDB
