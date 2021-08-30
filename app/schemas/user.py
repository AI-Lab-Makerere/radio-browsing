from marshmallow import Schema, fields, validate, ValidationError


class UserSchema(Schema):

    id = fields.Integer(dump_only=True)
    user_email = fields.Email(required=True)