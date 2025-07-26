from pydantic import BaseModel, EmailStr
from enum import Enum

class RoleEnum(str, Enum):
    user = "user"
    admin = "admin"

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    number: str
    password: str

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    number: str
    role: RoleEnum

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    name: str

class TokenData(BaseModel):
    email: str | None = None
