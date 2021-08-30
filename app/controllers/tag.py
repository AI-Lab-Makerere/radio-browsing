import json
from app.models.tag import Tag
from app.models.topic import Topic
from app.schemas import TagInSchema,TagOutSchema
from flask_restful import Resource, request

class TagView(Resource):

    #returns all tags
    def get(self):
        tag_schema = TagOutSchema(many=True)
        tags = Tag.find_all()

        tags_data, errors = tag_schema.dumps(tags)

        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=dict(tags=json.loads(tags_data))), 200

    #adds a new tag
    def post(self):

        tagin_schema = TagInSchema()
        tagout_schema = TagOutSchema()

        data = request.get_json()

        tag_name = data["tag_name"]

        existing_tag = Tag.find_first(tag_name=tag_name)

        if existing_tag:
            return dict(status='fail', message="tag already exists!"), 402

        valid_data, errors = tagin_schema.load(data)

        if errors:
            return dict(status='fail', message=errors), 402
        
        topic_name = data["topic_name"]
       

        topic = Topic.find_first(topic_name=topic_name)
        

        if not topic:
            return dict(status='fail', message='Topic doesnt exist!'), 404

        topic_id = topic.serialize()

        serialized_data = {      
            "tag_name" :  valid_data["tag_name"],
            "topic_id" :  topic_id["id"]    
        }
        
        clean_data, errors = tagout_schema.load(serialized_data)
        
        if errors:
            return dict(status='fail', message=errors), 500

        tag = Tag(**clean_data)

        saved_tag = tag.save()

        if not saved_tag:
            return dict(status='fail', message='Internal Server Error'), 500

        new_data, errors = tagout_schema.dumps(tag)

        return dict(status='success', data=dict(tag=json.loads(new_data))), 200
