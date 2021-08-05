import json
from app.models.tag import Tag
from app.models.audio import Audio
from app.models.audiotag import AudioTag
from app.schemas import TagOutSchema
from app.schemas import AudioSchema
from app.schemas import AudioTagInSchema, AudioTagOutSchema
from flask_restful import Resource, request


class AudioTagView(Resource):

    # returns all tags
    def get(self):
        audio_schema = AudioSchema(many=True)
        tag_schema = TagOutSchema(many=True)
        audiotagschema = AudioTagOutSchema(many=True)

        audios = Audio.find_all()
        tags = Tag.find_all()
        audiotags = AudioTag.find_all()

        ntags = []
        all_data = {"Audio": [], "Tags": []}

        for value in range(1, len(audios)+1):
            ntag = AudioTag.find_all(audio_id=value)
            ntags.append(ntag)
            s_tag = []
            #print("Audio {}:".format(value), audios[value-1].audio_name)
            s_tag.append(audios[value-1].audio_name)
            all_data["Audio"].append(audios[value-1].audio_name)
            #print("STag Array:", s_tag)
            # print(ntag)
            multi_tag = []

            for mtag in range(len(ntag)):

                # print(ntag[mtag].toString())
                val = ntag[mtag].toString()
                # print(tags[int(ntag[mtag])])
                #print(tags[val-1].name)
                multi_tag.append(tags[val-1].name)
                #print("MultiTaG Array:", multi_tag)
            # s_tag.append(multi_tag)
            all_data["Tags"].append(multi_tag)
            # all_data["Audio"].append(audios[value-1].audio)

        #print(all_data)

        tags_data, errors = tag_schema.dumps(all_data)
        #print(tags_data)
        
        if errors:
            return dict(status="fail", message="Internal Server Error"), 500

        return dict(status="success", data=all_data), 200
        # return "success", 200

    # searches for particular audio then adds tag to it
    def post(self):
        audiotaginschema = AudioTagInSchema()
        audiotagoutschema = AudioTagOutSchema()

        data = request.get_json()

        valid_data, errors = audiotaginschema.load(data)

        if errors:
            return dict(status='fail', message=errors), 402

        audio_name = data["audio_name"]
        tag_name = data["tag_name"]
        # print(name)

        audio = Audio.find_first(audio_name=audio_name)
        tag = Tag.find_first(tag_name=tag_name)

        if not audio:
            return dict(status="fail", message=f"No audio named {audio_name}!"), 404

        if not tag:
            return dict(status="fail", message=f"No audio named {tag_name}!"), 404

        audio_id = audio.serialize
        tag_id = tag.serialize

        serialized_data = {
            "audio_id": audio_id["id"],
            "tag_id": tag["id"]
        }

        valid_data, errors = audiotagoutschema.load(serialized_data)

        if errors:
            return dict(status='fail', message=errors), 400

        audio_tag = AudioTag(**valid_data)

        saved_audio_tag = audio_tag.save()

        if not saved_audio_tag:
            return dict(status='fail', message='Internal Server Error'), 500

        new_audio_tag, errors = audiotagoutschema.dumps(audio_tag)

        if errors:
            return dict(status="fail", message=errors), 500

        return dict(status="success", data=dict(json.loads(new_audio_tag))), 200
