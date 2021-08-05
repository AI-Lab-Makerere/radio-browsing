from marshmallow import Schema, fields, validate, pre_load

class CommentInSchema(Schema):

    id = fields.Integer(dump_only=True)
    audio_name = fields.String(required=True)
    user_email = fields.String(required=True)
    comment = fields.String(required=True, error_message={
        "required": "name is required"},
        validate=[
            validate.Regexp(
                regex=r'^(?!\s*$)', error='Comment should be a valid string'
            ),
        ])

class CommentOutSchema(Schema):

    id = fields.Integer(dump_only=True)
    audio_id = fields.Integer(required=True)
    user_id = fields.Integer(required=True)
    comment = fields.String(required=True, error_message={
        "required": "name is required"},
        validate=[
            validate.Regexp(
                regex=r'^(?!\s*$)', error='Comment should be a valid string'
            ),
        ])