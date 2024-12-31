import json
from fastapi import APIRouter

router = APIRouter(
	prefix="/skills"
)

@router.get("/")
async def get_skills():
	with open("data/skills.json", "r") as file:
		skills = json.load(file)
	return skills