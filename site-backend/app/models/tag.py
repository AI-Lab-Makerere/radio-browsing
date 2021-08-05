from app.models import db
from sqlalchemy.orm import relationship, backref
from datetime import timedelta
from sqlalchemy.exc import SQLAlchemyError
from app.models.root_model import RootModel

class Tag(RootModel):
    _tablename_ = "tag"

    id = db.Column(db.Integer,primary_key=True)
    tag_name = db.Column(db.String(20),nullable=False)
    topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'),nullable=False)

    topics = db.relationship('Topic',foreign_keys=[topic_id], backref="tag" ,lazy=True, uselist=False)

    @property
    def serialize(self):
        return {
        'id': self.id,
        'tag_name': self.tag_name
        }