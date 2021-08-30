import json
from app.models.tag import Tag
from app.models.speech import Speech
from app.models.speechtag import SpeechTag
from app.schemas.tag import TagSchema
from app.schemas.speech import SpeechSchema
from app.schemas.speechtag import SpeechTagSchema
from flask_restful import Resource, request

class STView(Resource):

    #returns all tags
    def get(self):
        speech_schema = SpeechSchema(many=True)
        tag_schema = TagSchema(many=True)
        speechtagschema = SpeechTagSchema(many=True)
        audios = Speech.find_all()
        tags = Tag.find_all()
        speechtags = SpeechTag.find_all()
        ntags = []
        #print(len(tags))
        for value in range(len(audios)):
            ntag = SpeechTag.find_all(audio_id=value)
            ntags.append(ntag)
            #print("record {}:".format(value),ntag,len(ntag))
            #print(ntag)
            if value >= len(audios)+1:
                break
            else:
                print("record {}:".format(value),audios[value].audio,"Tags: {}".format(len(ntag)))
                for mtag in range(1,len(ntag)+1):
                    #print(ntag[mtag].toString())
                    val = int(ntag[mtag-2].toString())
                    #print(tags[ntag[mtag].toString()])
                    if val >= len(tags):
                        break
                    else:
                        print(val)
                        print(tags[val].name)


        #tags_data, errors = tag_schema.dumps(ntags)

        #if errors:
        #    return dict(status="fail", message="Internal Server Error"), 500

        #return dict(status="success", data=dict(tags=json.loads(tags_data))), 200
        return "success", 200

    #searches for particular audio then adds tag to it
    def post(self):
        data = request.get_json()
        id = data["audio_id"]
        #print(name)
        speechtagschema = SpeechTagSchema()

        audio = Speech.get_by_id(id)
        #print(tag)
        if not audio:
            return dict(status="fail", message=f"No audio named {audio}!"), 404


        valid_data, errors = speechtagschema.load(data)

        if errors:
            return dict(status='fail', message=errors), 400

        audio_tag =   SpeechTag(**valid_data)

        saved_audio_tag = audio_tag.save()

        if not saved_audio_tag:
            return dict(status='fail', message='Internal Server Error'), 500

        new_audio_tag, errors = speechtagschema.dumps(audio_tag)

        if errors:
            return dict(status="fail", message=errors), 500

        return dict(status="success",data= dict(json.loads(new_audio_tag))),200
