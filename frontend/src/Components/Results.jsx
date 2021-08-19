
import { useEffect } from 'react';
import { useState } from 'react';

import { API } from '../utils';
import Header from './header';
import AudioCard from './box';

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
            <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row icon-boxes">
                    {audios.length > 0 ? audios.map((audio) => (   
                        <AudioCard id={audio.id} name={audio.audio_name} />
                    ))
                    : <h2 style={{marginTop:'100px', color:'black'}}>No such Audios</h2> 
                    }
                </div>
            </div>
            </section>
        </div>
    )

}

export default Results;