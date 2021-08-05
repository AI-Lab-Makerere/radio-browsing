import json
from app.models.tag import Tag
from app.models.audiotag import AudioTag
from app.models.audio import Audio
from app.schemas import TagInSchema
from flask_restful import Resource, request

class SearchView(Resource):
    
    #searches for particular tag
    def post(self):
        data = request.get_json()
        name = data["tag_name"]
        #print(name)
        tagschema = TagInSchema()

        tag = Tag.find_first(tag_name=name)
        audios = Audio.find_all()
        #print(tag)
        if not tag:
            return dict(status="fail", message=f"Tag with name {name} does not exist!"), 404

        all_data = {"Audios":[],"Tag":""}
        tdata = tag.serialize

        tag_id = tdata["id"]
        tag_name = tdata["name"]

        all_data["Tag"] = tag_name

        rel_audio_ids = AudioTag.find_all(audio_id=tag_id)
        #print(rel_audio_ids)

        for value in range(len(rel_audio_ids)):
            #print(audios[rel_audio_ids[value].toString()].audio)
            all_data["Audios"].append(audios[rel_audio_ids[value].toString()].audio)

        #print(all_data)
        
        return dict(status = "success",data = all_data), 200
