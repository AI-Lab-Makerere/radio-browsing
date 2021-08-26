import React, { useState } from "react"
import { storage } from "../../utils/firebase"

const AudioUpload = () => {

    const [audio, setAudio] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setAudio(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`audios/${audio.name}`).put(audio);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("audios")
                    .child(audio.name)
                    .getDownloadURL()
                    .then( url => {
                        console.log(url);
                    })
            }
        )
    }

    console.log("audio: ", audio);
    return (
        <div>
            Hi all <br/>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
export default AudioUpload