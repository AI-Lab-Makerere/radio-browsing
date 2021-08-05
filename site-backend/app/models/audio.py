from app.models import db
from app.models.root_model import RootModel

class Audio(RootModel):
    _tablename_ = "audio"

    id = db.Column(db.Integer, primary_key=True)
    audio_name = db.Column(db.String,nullable=False)

    @property
    def serialize(self):
        return {
        'id': self.id
        }