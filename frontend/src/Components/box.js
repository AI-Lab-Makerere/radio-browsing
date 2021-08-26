import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const AudioCard = (props) => {

    return (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">

            <div className="icon-box">
                <h2><i>{  props.id}</i></h2>
                <div className="icon row"><i className="bi-soundwave"><h4 className="title"><a href="">{  props.name}</a></h4></i>
                </div>

                <audio className="audio" preload="auto" controls style={{ marginLeft: '-13px' }}>
                    <source src="assets/audio/dummy-audio.mp3" />
                </audio>

                <ListGroup className="list-group-flush" style={{ border: 'none' }}>
                    <ListGroupItem data-aos="fade-up">

                        <i className="bi bi-translate"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#one${  props.id}`}>Translate<i className="bx bx-chevron-down icon-show"></i></a>
                        <div id={`one${  props.id}`} className="collapse">
                            <textarea className="form-control" name="message" rows="5" placeholder="Translate" required></textarea>
                        </div>

                    </ListGroupItem>

                    <ListGroupItem data-aos="fade-up">

                        <i className="bi bi-geo-alt"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#two${  props.id}`}>Location<i className="bx bx-chevron-down icon-show"></i></a>
                        <div id={`two${  props.id}`} className="collapse">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Location" />
                        </div>

                    </ListGroupItem>

                    <ListGroupItem data-aos="fade-up">
                        <i className="bi-mic"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#three${  props.id}`}>Who's Speaking?<i className="bx bx-chevron-down icon-show"></i></a>
                        <div id={`three${  props.id}`} className="collapse">
                            <div className="radio">
                                <label><input type="radio" name="r" /> Public</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="r" /> Media</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="r" /> Official</label>
                            </div>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </div>
            <br /><br />
        </div>



    )
}

export default AudioCard;