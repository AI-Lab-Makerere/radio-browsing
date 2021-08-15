import React, { useState, useEffect } from "react";
import NavBar from "../Layout/navBar";
import Footer from "../Layout/Footer";
import AudioCard from "./audioCard";
import { API } from "../../utils";


const Audio = (props) => {
  const [audioList, setAudioList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAudios = async () => {
    setLoading(true);
    await API.get("/search/audios")
      .then((response) => {
        setAudioList(response.data.data.audios);
        console.log(response.data.data.audios)
        setLoading(false);
      })
      .catch((error) => {
        console.log(`error occured: ${error}`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAudios();
  }, []);

  return (
    <div>
      {loading && "loading"}
      <div>
        <NavBar page="audios" />
        <section
          className="razo-music-charts-area section-padding-80 bg-overlay bg-img jarallax"
        
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center white">
                  <h2>AUDIOS</h2>
                </div>
              </div>
            </div>

            <div>
              {audioList.length > 0
                ? audioList.map((audio) => (
                    <div>
                    <AudioCard number={audio.id} audio_name={audio.audio_name}/>
                    <br />
                    </div>
                  ))
                : "Nothing"}
            </div>
            
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
export default Audio;
