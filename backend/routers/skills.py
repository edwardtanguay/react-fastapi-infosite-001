from fastapi import APIRouter

router = APIRouter(
	prefix="/skills"
)

@router.get("/")
async def get_skills():
	return [
		"skill1",
		"skill2"
	]