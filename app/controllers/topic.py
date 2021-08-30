import json
from app.models.topic import Topic
from app.schemas import TopicSchema
from flask_restful import Resource, request

class TopicView(Resource):

    #returns all topics
    def get(self):
        topic_schema = TopicSchema(many=True)
        topics = Topic.find_all()

        topics_data, errors = topic_schema.dumps(topics)

        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=dict(topics=json.loads(topics_data))), 200

    #adds a new topic
    def post(self):

        topic_schema = TopicSchema()

        data = request.get_json()

        valid_data, errors = topic_schema.load(data)

        if errors:
            return dict(status='fail', message=errors), 402

        topic = Topic(**valid_data)

        saved_topic = topic.save()

        if not saved_topic:
            return dict(status='fail', message='Internal Server Error'), 500

        new_data, errors = topic_schema.dumps(topic)

        return dict(status='success', data=dict(topic=json.loads(new_data))), 200
