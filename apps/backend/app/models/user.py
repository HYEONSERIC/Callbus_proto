import enum
from sqlalchemy import String, Enum
from sqlalchemy.orm import Mapped, mapped_column
from ..core.db import Base

class Role(str, enum.Enum):
    passenger = "passenger"
    driver = "driver"
    vendor = "vendor"
    admin = "admin"

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[Role] = mapped_column(Enum(Role), nullable=False, default=Role.passenger)
