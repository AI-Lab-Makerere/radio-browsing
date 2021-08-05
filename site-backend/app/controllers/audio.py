import json
from flask_restful import Resource, request
from app.schemas import AudioSchema
from app.models.audio import Audio
from app.models.tag import Tag



class AudioView(Resource):

    def post(self):
        #adding an audio
        audio_schema = AudioSchema()

        audio_data = request.get_json()
        
        validated_audio_data, errors = audio_schema.load(audio_data)
        
        if errors:
            return dict(status='fail', message=errors), 402

        clean_data, errors = audio_schema.load(validated_audio_data)
        
        if errors:
            return dict(status='fail', message=errors), 402

        audio = Audio(**clean_data)

        saved_audio = audio.save()

        if not saved_audio:
            return dict(status='fail', message='Internal Server Error'), 500

        new_audio_data, errors = audio_schema.dumps(audio)

        return dict(status='success', data=dict(audio=json.loads(new_audio_data))), 200

    # @jwt_required
    def get(self):
        #returns all audios
        audio_schema = AudioSchema(many=True)

        audios = Audio.find_all()

        audios_data, errors = audio_schema.dumps(audios)

        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=dict(audios=json.loads(audios_data))), 200
