from marshmallow import Schema, fields, validate

class TagInSchema(Schema):
    id = fields.Integer(dump_only=True)
    tag_name = fields.String(required=True)
    topic_name = fields.String(required=True, error_message={
        "required": "name is required"},
        validate=[
            validate.Regexp(
                regex=r'^(?!\s*$)', error='Topic Name should be a valid string'
            ),
        ])

class TagOutSchema(Schema):
    id = fields.Integer(dump_only=True)
    tag_name = fields.String(required=True)
    topic_id = fields.Integer(required=True)
        