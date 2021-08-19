
import { useEffect } from 'react';
import { useState } from 'react';

import { API } from '../utils';
import Audio from './audio';
import Header from './header';

const Results = (props) => {
    const [audios, setAudios] = useState([])
    const [loading, setLoading] = useState(false)

    const getAudios = async () => {
        await API.get('/search/audios')
            .then((response) => {
                setAudios(response.data.data.audios)
                console.log(response.data.data.audios)
                setLoading(false)
                console.log(`lenght ${audios.length}`)
            })
            .catch((error)=>{
                console.log(`error occurred ${error}`)
                setLoading(false)
            })
    }

    useEffect(()=>{
        getAudios()
    },[])

    return(
        <div>
            <Header title={'Results'} />
            <div className="container">
            <div className="row">
                
                    {audios.length > 0 ? audios.map((audio) => (
                        <div >
                            <Audio id={audio.id} audio_name={audio.audio_name} />
                            <br/>
                        </div>
                    ))
                    : 'No such Audios' 
                    }
                </div>
            </div>
        </div>
    )

}

export default Results;