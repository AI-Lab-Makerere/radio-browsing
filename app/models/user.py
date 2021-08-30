from flask_bcrypt import Bcrypt
from sqlalchemy.orm import relationship, backref
from datetime import timedelta
from flask_jwt_extended import create_access_token

from ..models import db
from app.models.root_model import RootModel


class User(RootModel):
    _tablename_ = "user"

    id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(120), nullable=False)

    def __init__(self, user_email):
        """ initialize with email and password """
        self.user_email = user_email

    def __repr__(self):
        return "<User: {}>".format(self.email)

    def serialize(self):
        return {
            'id': self.id
        }

    @property
    def transform(self):
        return {
            'id': self.id,
            'user_email': self.user_email
        }
