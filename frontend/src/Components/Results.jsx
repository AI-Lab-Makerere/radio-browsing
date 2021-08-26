import React , { useState, useEffect } from "react"
import { API } from '../utils';
import Header from './Layout/header';
import AudioCard from './box';

const Results = (props) => {
    const [audios, setAudios] = useState([])
    const [loading, setLoading] = useState(false)

    const getAudios = async () => {
        await API.get('/search/audios')
            .then((response) => {
                setAudios(response.data.data.audios)
                //console.log(response.data.data.Audios)
                setLoading(false)
                //console.log(`lenght ${audios.length}`)
            })
            .catch((error)=>{
                console.log(`error occurred ${error}`)
                setLoading(false)
            })
    }

    const getAudiosByTag = async () => {
        await API.post(
            '/search_tag',
            {
                tag_name: props.location.state.tag_name
            }
            )
            .then((response) => {
                setAudios(response.data.data.Audios)
                //console.log(response.data.data.Audios)
                setLoading(false)
                //console.log(`lenght ${audios.length}`)
            })
            .catch((error)=>{
                console.log(`error occurred ${error}`)
                setLoading(false)
            })
    }

    const getAudiosByTopic = async () => {
        await API.post(
            '/search_topic',
            {
                topic_name: props.location.state.topic_name
            }
        )
        .then((response) => {
            setAudios(response.data.data.Audios)
            //console.log(response.data.data.Audios)
            setLoading(false)
            //console.log(`lenght ${audios.length}`)
        })
        .catch((error)=>{
            console.log(`error occurred ${error}`)
            setLoading(false)
        })
    }

    const getAudiosBySelected = async () => {
        await API.post(
            '/search_tag',
            {
                tag_name: props.location.state.selected
            }
        )
        .then((response) => {
            setAudios(response.data.data.Audios)
            //console.log(response.data.data.Audios)
            setLoading(false)
            //console.log(`lenght ${audios.length}`)
        })
        .catch((error)=>{
            console.log(`error occurred ${error}`)
            setLoading(false)
        })
    }
    
    const selector = () => {
        if (!props.location.state) {
            getAudios()
        }
        else if (props.location.state.topic_name) {
            getAudiosByTopic()
        }
        else if (props.location.state.tag_name) {
            getAudiosByTag()
        }
        else if (props.location.state.selected) {
            getAudiosBySelected()
        }
        else {
            getAudios()
        }

    }

    useEffect(()=>{
        selector()
    },[])

    return(
        <div>
            <Header title={'Results'} />
                <section id="hero" class="d-flex align-items-center">
                    <div className="container-fluid position-relative" data-aos="fade-up" data-aos-delay="100">
                        <div className="row">
                            <div className="row icon-boxes col-lg-8 video-box align-self-baseline">
                                {audios.length > 0 ? audios.map((audio) => (   
                                    <AudioCard id={audio.id} name={audio.audio_name} />
                                ))
                                : <h2 style={{marginTop:'100px', color:'black'}}>No such Audios</h2> 
                                }
                            </div>

                            <div class="col-lg-4 col-lg-4 pt-3 pt-lg-0 content" data-aos="fade-right" data-aos-delay="100">
                                <iframe style={{border:'0', width: '100%', height: '1500px', marginTop:'100px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                            </div>    

                        </div>
                        
                    </div>
                </section>
        </div>
    )

}

export default Results;