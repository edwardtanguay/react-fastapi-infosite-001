from fastapi import FastAPI
from routers import skills
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3664"
]

app.add_middleware(CORSMiddleware, allow_origins=origins)

app.include_router(skills.router)

@app.get("/")
async def hello_world():
	return {"message": "hello world"}