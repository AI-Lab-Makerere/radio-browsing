from marshmallow import Schema, fields, validate

class TopicSchema(Schema):
    id = fields.Integer(dump_only=True)
    topic_name = fields.String(required=True)
