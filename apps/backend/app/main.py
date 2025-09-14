from fastapi import FastAPI
from .routers.health import router as health_router
from .routers.dbping import router as db_router   # ← 추가

app = FastAPI(title="CALLBUS API")
app.include_router(health_router)
app.include_router(db_router)                     # ← 추가
