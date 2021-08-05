from app.controllers import audio
import json
from flask_restful import Resource, request
from app.schemas import CommentInSchema,CommentOutSchema
from app.models.comment import Comment
from app.models.user import User
from app.models.audio import Audio

class CommentView(Resource):

    def post(self):
        #adding an audio
        comment_schema = CommentInSchema()

        comment_data = request.get_json()

        validated_comment_data, errors = comment_schema.load(comment_data)

        if errors:
            return dict(status='fail', message=errors), 402

        user_email = comment_data["user_email"]
        audio_name = comment_data["audio_name"]

        user = User.find_first(user_email=user_email)
        audio = Audio.find_first(audio_name=audio_name)

        if not user:
            return dict(status='fail', message=f'User with  email:{user_email} doesnt exist!'), 404

        user_id = user.serialize
        audio_id = audio.serialize

        #validated_comment_data["audio_name"] = audio_id["id"]
        #validated_comment_data["user_email"] = user_id["id"]
        
        serialized_data = {
            "id" : validated_comment_data["id"],
            "audio_id" :  audio_id["id"],
            "user_id" :  user_id["id"],
            "comment" :  validated_comment_data["comment"]
        }

        comment = Comment(**serialized_data)
        print(serialized_data)
        saved_comment = comment.save()

        if not saved_comment:
            return dict(status='fail', message='Internal Server Error'), 500

        new_comment_data, errors = comment_schema.dumps(comment)

        return dict(status='success', data=dict(comment=json.loads(new_comment_data))), 200

    # @jwt_required
    def get(self):
        #returns all audios
        comment_schema = CommentOutSchema(many=True)

        comments = Comment.find_all()

        comments_data, errors = comment_schema.dumps(comments)

        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=dict(comments=json.loads(comments_data))), 200
