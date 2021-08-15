from app.models import db
from sqlalchemy.orm import relationship, backref
from datetime import timedelta
from sqlalchemy.exc import SQLAlchemyError
from app.models.root_model import RootModel

class Topic(RootModel):
    _tablename_ = "topic"

    id=db.Column(db.Integer,primary_key=True)
    topic_name=db.Column(db.String(20),nullable=False)
    

    def serialize(self):
        return {
        'id': self.id
        }

    @property
    def transform(self):
        return {
        'id': self.id,
        'topic_name': self.topic_name
        }