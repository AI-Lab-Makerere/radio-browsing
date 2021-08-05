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

    def __init__(self, id):
        """ initialize with name """
        self.tag_id = tag_id

    def __repr__(self):
        return "{}".format(self.tag_id)

    def toString(self):
        return self.tag_id