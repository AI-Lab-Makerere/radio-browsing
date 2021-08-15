from app.models import db
from app.models.tag import Tag
from app.models.root_model import RootModel


class AudioTag(RootModel):
    _tablename_ = "audiotag"

    id = db.Column(db.Integer, primary_key=True)
    audio_id = db.Column(db.Integer, db.ForeignKey('audio.id'),nullable=False)
    tag_id = db.Column(db.Integer, db.ForeignKey('tag.id'),nullable=False)

    tags = db.relationship('Tag',foreign_keys=[tag_id], backref="audiotag" ,lazy=True, uselist=False)
    audios = db.relationship('Audio',foreign_keys=[audio_id], backref="audiotag" ,lazy=True, uselist=False)

    def __init__(self, tag_id, audio_id):
        """ initialize with tag_id """
        self.tag_id = tag_id
        self.audio_id = audio_id

    def __repr__(self):
        return "<Tag ID: {}>".format(self.tag_id)

    def serialize(self):
        return self.tag_id

    @property
    def transform(self):
        return {
        'audio_id': self.audio_id,
        'tag_id': self.tag_id
        }