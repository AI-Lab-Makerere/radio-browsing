import json
from flask_restful import Resource, request
from app.models import comment
from app.schemas import CommentInSchema,CommentOutSchema
from app.models.comment import Comment
from app.models.user import User
from app.models.audio import Audio

class CommentView(Resource):

    def post(self):
        #adding a review to an audio
        commentin_schema = CommentInSchema()
        commentout_schema = CommentOutSchema()

        comment_data = request.get_json()

        validated_comment_data, errors = commentin_schema.load(comment_data)

        if errors:
            return dict(status='fail', message=errors), 402

        user_email = comment_data["user_email"]
        audio_name = comment_data["audio_name"]

        user = User.find_first(user_email=user_email)
        audio = Audio.find_first(audio_name=audio_name)

        if not user:
            return dict(status='fail', message=f'User with email {user_email} doesnt exist!'), 404

        if not audio:
            return dict(status='fail', message=f'Audio with name {audio_name} doesnt exist!'), 404

        user_id = user.serialize()
        audio_id = audio.serialize()

        #validated_comment_data["audio_name"] = audio_id["id"]
        #validated_comment_data["user_email"] = user_id["id"]
        
        serialized_data = {
            #"id" : validated_comment_data["id"],
            "audio_id" :  audio_id["id"],
            "user_id" :  user_id["id"],
            "comment" :  validated_comment_data["comment"]
        }

        #print(validated_comment_data)
        #return "success" , 200
                
        comment = Comment(**serialized_data)
        #print(serialized_data)
        saved_comment = comment.save()

        if not saved_comment:
            return dict(status='fail', message="Internal Server Error: data not saved"), 500

        new_comment, errors = commentout_schema.dumps(comment)

        return dict(status='success', data=dict(comment=json.loads(new_comment))), 200
        

    # @jwt_required
    def get(self):
        #returns all comments about all audios
        comments = Comment.find_all()
        #print(comments)
        #print(len(comments))

        """
        comment_schema = CommentOutSchema(many=True)


        comments_data, errors = comment_schema.dumps(comments)

        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=dict(comments=json.loads(comments_data))), 200
        """

        all_data = {"Audio": [], "Comments": [], "User": []}       
        
        for value in range(len(comments)):

            comment_data = comments[value].transform

            user_id = comment_data["user_id"]
            audio_id = comment_data["audio_id"]
            comment = comment_data["comment"]

            all_data["Comments"].append(comment)

            user_data = User.find_first(id=user_id)
            audio_data = Audio.find_first(id=audio_id)

            user_dict = user_data.transform
            audio_dict = audio_data.transform

            user_email = user_dict["user_email"]
            audio_name = audio_dict["audio_name"]

            print(f"User: {user_email} Audio: {audio_name}")
            
            all_data["Audio"].append(audio_name)
            all_data["User"].append(user_email)
        

        return dict(status="success", data=all_data), 200