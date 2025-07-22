from sqlmodel import Session, select
from models import User
from schemas import UserCreate
from auth import hash_password

def create_user(session: Session, user_data: UserCreate):
    user = User(
        name=user_data.name,
        email=user_data.email,
        number=user_data.number,
        hashed_password=hash_password(user_data.password),
        role=user_data.role
    )
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

def get_user_by_email(session: Session, email: str):
    statement = select(User).where(User.email == email)
    return session.exec(statement).first()
