import os
from pydantic import BaseModel

class Settings(BaseModel):
    # 로컬 uvicorn 실행 시 기본값은 localhost
    database_url: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg://callbus:callbus_pw@localhost:5432/callbus_db"
    )

settings = Settings()
