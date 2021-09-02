import React, { useState } from "react"
import { API } from "../../utils"
import { storage } from "../../utils/firebase"

const AudioUpload = () => {

    const [audio, setAudio] = useState(null);
    const [uploadName, setUploadName] = useState("");
    const [uploadLink, setUploadLink] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setAudio(e.target.files[0])
        }
    }

    const handleSave = () => {
        const uploadTask = storage.ref(`audios/${audio.name}`).put(audio);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("audios")
                    .child(audio.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setUploadName(audio.name)
                        setUploadLink(url)
                    })
            }
        )
    }
    console.log("audio: ", audio);

    const handleUpload = async () => {
        await API.post(
            "/search/audios",
            {
                audio_name: uploadName,
                audio_url: uploadLink
            })
            .then((response) => { console.log("success") })
            .catch((error) => {
                console.log(`error occurred ${error}`)

            })
    }

    return (
        <>
            <div>
                Hi all <br />
                <input type="file" onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
            </div>
            <br/>
            {uploadName === "" ?
                <span>No audio saved</span>
                :
                <div>
                    <p>Audio Name: {uploadName}</p>
                    <p>Audio URL: {uploadLink}</p>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            }

        </>
    )
}
export default AudioUpload