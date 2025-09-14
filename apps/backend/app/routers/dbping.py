from fastapi import APIRouter, HTTPException
from ..core.db import ping_db

router = APIRouter()

@router.get("/db-ping")
def db_ping():
    try:
        ping_db()
        return {"db": "ok"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
