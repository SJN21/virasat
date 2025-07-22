from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from datetime import timedelta

from . import models, schemas, database, utils, auth

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# ✅ CORS setup for frontend dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register", response_model=schemas.Token)
def register(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed = utils.hash_password(user.password)
    new_user = models.User(
        name=user.name,
        email=user.email,
        number=user.number,
        hashed_password=hashed,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    access_token = auth.create_access_token(
        data={"sub": new_user.email}, expires_delta=timedelta(days=2)
    )
    return {"access_token": access_token, "token_type": "bearer"}

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login", response_model=schemas.Token)
def login(request: LoginRequest, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.email == request.email).first()
    if not user or not utils.verify_password(request.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=timedelta(days=2)
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/admin/dashboard")
def admin_dashboard(current_user=Depends(auth.get_admin_user)):
    return {"message": f"Welcome Admin {current_user.name}"}
