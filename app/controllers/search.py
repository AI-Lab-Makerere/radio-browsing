import json
from app.models.tag import Tag
from app.models.audiotag import AudioTag
from app.models.audio import Audio
from app.models.topic import Topic
from app.schemas import TagInSchema
from app.schemas import TopicSchema
from flask_restful import Resource, request

class TagSearchView(Resource):
    
    #searches for particular tag and returns all audios attached to it
    def post(self):
        data = request.get_json()
        name = data["tag_name"]
        
        tagschema = TagInSchema()

        tag = Tag.find_first(tag_name=name)
        audios = Audio.find_all()
        
        if not tag:
            return dict(status="fail", message=f"Tag with name {name} does not exist!"), 404

        all_data = {"Audios":[],"Audio_URLs": [], "Topic":""}
        tdata = tag.transform

        tag_id = tdata["id"]
        tag_name = tdata["tag_name"]

        all_data["Tag"] = tag_name
        
        rel_audio_ids = AudioTag.find_all(tag_id=tag_id)


        for value in range(len(rel_audio_ids)):

            value_dict = rel_audio_ids[value].transform

            audio_id = value_dict["audio_id"]

            audio_data = Audio.find_first(id=audio_id)

            audio_dict = audio_data.transform
            audio_name = audio_dict["audio_name"]
            audio_url = audio_dict["audio_url"]
            
            all_data["Audios"].append(audio_name)
            all_data["Audio_URLs"].append(audio_url)

        return dict(status = "success",data = all_data), 200


class TopicSearchView(Resource):
    
    #searches for particular topic and returns all audios attached to it
    def post(self):
        data = request.get_json()
        name = data["topic_name"]
        
        topic = Topic.find_first(topic_name=name)
        
        if not topic:
            return dict(status="fail", message=f"Topic with name {name} does not exist!"), 404

        all_data = {"Audios":[],"Audio_URLs": [], "Topic":""}
        tdata = topic.transform

        topic_id = tdata["id"]
        topic_name = tdata["topic_name"]

        all_data["Topic"] = topic_name

        rel_tag_ids = Tag.find_all(topic_id=topic_id)

        for tag in range(len(rel_tag_ids)):
            tag_value = rel_tag_ids[tag].transform
            tag_id = tag_value["id"]


            rel_audio_ids = AudioTag.find_all(tag_id=tag_id)

            if len(rel_audio_ids) == 1:
                #for one audio get individual audio details
                rel_audio = rel_audio_ids[0].transform

                audio_id = rel_audio["audio_id"]

                audio_data = Audio.find_first(id=audio_id)

                audio_dict = audio_data.transform

                audio_name = audio_dict["audio_name"]
                audio_url = audio_dict["audio_url"]

                all_data["Audios"].append(audio_name)
                all_data["Audio_URLs"].append(audio_url)

            elif len(rel_audio_ids) > 1:
                #for more than one audio get individual audio details
                for audio in range(len(rel_audio_ids)):
                    rel_audio = rel_audio_ids[audio].transform

                    audio_id = rel_audio["audio_id"]

                    audio_data = Audio.find_first(id=audio_id)

                    audio_dict = audio_data.transform

                    audio_name = audio_dict["audio_name"]
                    audio_url = audio_dict["audio_url"]

                    all_data["Audios"].append(audio_name)
                    all_data["Audio_URLs"].append(audio_url)

            else:
                #if tags have no audios attached
                
                continue

        seen_audio = set()
        unique_audio = []

        for x in range(len(all_data["Audios"])):
            #to filter for repeated audios since each tag is represented by an audio
            if all_data["Audios"][x] not in seen_audio:
                unique_audio.append(all_data["Audios"][x])
                seen_audio.add(all_data["Audios"][x])


        #update list after removing duplicate audios
        all_data["Audios"] = unique_audio
        
        return dict(status='success', data=dict(all_data)), 200
