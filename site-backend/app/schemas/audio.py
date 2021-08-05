from marshmallow import Schema, fields, validate

class AudioSchema(Schema):

    id = fields.Integer(dump_only=True)
    audio_name = fields.String(required=True)
