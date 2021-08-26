import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const AudioCard = (props) => {

    return (
       
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">

            <div className="icon-box" style={{marginTop:'20px'}}>
                <ListGroup className="list-group-flush" style={{ border: 'none' }}>
                    <ListGroupItem>
                        <div className="row">
                            
                            <div className="icon col-2"><i className="bi-soundwave"></i></div>
                            <div className="col-10"><i><h3 className="title"><a href="">{ props.name}</a></h3></i></div>
                        </div>
                    </ListGroupItem>
                
                    
                    <ListGroupItem>
                    <audio className="audio" preload="auto" controls style={{ marginLeft: '-15px' }}>
                        <source src="assets/audio/dummy-audio.mp3" />
                    </audio>
                    </ListGroupItem>
                </ListGroup>   
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
                        <i className="bi-gender-ambiguous"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#three${  props.id}`}>Gender?<i className="bx bx-chevron-down icon-show"></i></a>
                        <div id={`three${  props.id}`} className="collapse">
                            <div className="radio">
                                <label><input type="radio" name="r" /> Female</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="r" /> Male</label>
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem data-aos="fade-up">
                        <i className="bi-mic"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#four${  props.id}`}>Who's Speaking?<i className="bx bx-chevron-down icon-show"></i></a>
                        <div id={`four${  props.id}`} className="collapse">
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