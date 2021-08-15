from datetime import datetime, timedelta
from sqlalchemy.orm import relationship, backref
from app.models.user import User
from app.models import db
from app.models.root_model import RootModel


class Comment(RootModel):
    
    _tablename_ = 'comment'

    id = db.Column(db.Integer, primary_key=True)
    audio_id = db.Column(db.Integer, db.ForeignKey('audio.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    comment = db.Column(db.String,nullable=False)

    audios = db.relationship('Audio',foreign_keys=[audio_id] ,lazy=True, uselist=False)
    users = db.relationship('User',foreign_keys=[user_id] ,lazy=True, uselist=False)


    
    def serialize(self):
        return {
        'id': self.id,
        'comment': self.comment
        }

    @property
    def transform(self):
        return {
        'id': self.id,
        'audio_id': self.audio_id,
        'user_id': self.user_id,
        'comment': self.comment
        }