
from fastapi import FastAPI
app = FastAPI(title="JEE Mock Test Maker")
@app.get("/")
def root():
    return {"status":"ok"}
