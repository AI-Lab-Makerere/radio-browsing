from marshmallow import Schema, fields, validate

class AudioTagInSchema(Schema):

    id = fields.Integer(dump_only=True)
    audio_name = fields.String(required=True)
    tag_name = fields.String(required=True)

class AudioTagOutSchema(Schema):

    id = fields.Integer(dump_only=True)
    audio_id = fields.Integer(required=True)
    tag_id = fields.Integer(required=True)
    