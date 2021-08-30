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
        #print(name)
        tagschema = TagInSchema()

        tag = Tag.find_first(tag_name=name)
        audios = Audio.find_all()
        #print(tag)
        if not tag:
            return dict(status="fail", message=f"Tag with name {name} does not exist!"), 404

        all_data = {"Audios":[],"Audio_URLs": [], "Topic":""}
        tdata = tag.transform

        tag_id = tdata["id"]
        tag_name = tdata["tag_name"]

        all_data["Tag"] = tag_name
        #print(f"TagID: {tag_id} TagName: {tag_name}")
        
        rel_audio_ids = AudioTag.find_all(tag_id=tag_id)
        #print(rel_audio_ids)
        #print(len(rel_audio_ids))

        for value in range(len(rel_audio_ids)):

            value_dict = rel_audio_ids[value].transform

            audio_id = value_dict["audio_id"]
            #print(audio_id)

            audio_data = Audio.find_first(id=audio_id)
            #print(audio_data)

            audio_dict = audio_data.transform
            audio_name = audio_dict["audio_name"]
            audio_url = audio_dict["audio_url"]
            #print(audio_name)
            all_data["Audios"].append(audio_name)
            all_data["Audio_URLs"].append(audio_url)
            """
            if value == 0:
                #print(audios[rel_audio_ids[0].serialize()].audio_name)
                print(rel_audio_ids[value].transform)
            else:
                #print(audios[rel_audio_ids[value].transform()].audio_name)
                print(rel_audio_ids[value].transform)
            """
            #all_data["Audios"].append(audios[rel_audio_ids[value].serialize()].audio_name)

        #print(all_data)
        #return "success" , 200
        return dict(status = "success",data = all_data), 200


class TopicSearchView(Resource):
    
    #searches for particular topic and returns all audios attached to it
    def post(self):
        data = request.get_json()
        name = data["topic_name"]
        #print(name)
        
        topic = Topic.find_first(topic_name=name)
        
        if not topic:
            return dict(status="fail", message=f"Topic with name {name} does not exist!"), 404

        all_data = {"Audios":[],"Audio_URLs": [], "Topic":""}
        tdata = topic.transform

        topic_id = tdata["id"]
        topic_name = tdata["topic_name"]

        all_data["Topic"] = topic_name

        rel_tag_ids = Tag.find_all(topic_id=topic_id)
        #print(rel_tag_ids)

        for tag in range(len(rel_tag_ids)):
            tag_value = rel_tag_ids[tag].transform
            tag_id = tag_value["id"]
            #tag_name = tag_value["tag_name"]

            #print(f"ID: {tag_id} Name:{tag_name}") 

            rel_audio_ids = AudioTag.find_all(tag_id=tag_id)
            #print(rel_audio_ids)

            if len(rel_audio_ids) == 1:
                #for one audio get individual audio details
                rel_audio = rel_audio_ids[0].transform

                audio_id = rel_audio["audio_id"]

                audio_data = Audio.find_first(id=audio_id)
                #print(audio_data)

                audio_dict = audio_data.transform

                audio_name = audio_dict["audio_name"]
                audio_url = audio_dict["audio_url"]
                #print(audio_name)

                all_data["Audios"].append(audio_name)
                all_data["Audio_URLs"].append(audio_url)

            elif len(rel_audio_ids) > 1:
                #for more than one audio get individual audio details
                for audio in range(len(rel_audio_ids)):
                    rel_audio = rel_audio_ids[audio].transform

                    audio_id = rel_audio["audio_id"]

                    audio_data = Audio.find_first(id=audio_id)
                    #print(audio_data)

                    audio_dict = audio_data.transform

                    audio_name = audio_dict["audio_name"]
                    audio_url = audio_dict["audio_url"]
                    #print(audio_name)

                    all_data["Audios"].append(audio_name)
                    all_data["Audio_URLs"].append(audio_url)

            else:
                #if tags have no audios attached
                #print("NO audios attached")
                continue

        seen_audio = set()
        unique_audio = []

        for x in range(len(all_data["Audios"])):
            #to filter for repeated audios since each tag is represented by an audio
            if all_data["Audios"][x] not in seen_audio:
                unique_audio.append(all_data["Audios"][x])
                seen_audio.add(all_data["Audios"][x])

        #print(all_data)
        #print(unique_audio)
        #print(seen_audio)

        #update list after removing duplicate audios
        all_data["Audios"] = unique_audio
        
        return dict(status='success', data=dict(all_data)), 200
