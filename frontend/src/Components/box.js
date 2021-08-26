import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class AudioCard extends Component{
    render(){
        return (         
                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            
                            <div className="icon-box">
                                <h2><i>{this.props.id}</i></h2>
                                <div className="icon row"><i className="bi-soundwave"><h4 className="title"><a href="">{this.props.name}</a></h4></i>
                                </div>
                            
                                    <audio className="audio" preload="auto" controls style={{marginLeft:'-13px'}}>
                                        <source src="assets/audio/dummy-audio.mp3"/>
                                    </audio>

                                    <ListGroup className="list-group-flush" style={{border:'none'}}>   
                                        <ListGroupItem data-aos="fade-up"> 
                                                                                                                    
                                                <i className="bi bi-translate"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#one${this.props.id}`}>Translate<i className="bx bx-chevron-down icon-show"></i></a>
                                                <div id={`one${this.props.id}`} className="collapse">
                                                    <textarea className="form-control" name="message" rows="5" placeholder="Translate" required></textarea>
                                                </div>   
                                                                    
                                        </ListGroupItem>  

                                        <ListGroupItem data-aos="fade-up">
                                                                        
                                                <i className="bi bi-geo-alt"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#two${this.props.id}`}>Location<i className="bx bx-chevron-down icon-show"></i></a>
                                                <div id={`two${this.props.id}`} className="collapse">
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Location" />
                                                </div>  
                                                                        
                                        </ListGroupItem>  

                                        <ListGroupItem data-aos="fade-up">                             
                                                <i className="bi-mic"></i> <a href="#" data-bs-toggle="collapse" className="collapse show" data-bs-target={`#three${this.props.id}`}>Who's Speaking?<i className="bx bx-chevron-down icon-show"></i></a>
                                                <div id={`three${this.props.id}`} className="collapse">
                                                    <div className="radio">
                                                        <label><input type="radio" name="r"/> Public</label>
                                                    </div>
                                                    <div className="radio">
                                                        <label><input type="radio" name="r"/> Media</label>
                                                    </div>
                                                    <div className="radio">
                                                        <label><input type="radio" name="r"/> Official</label>
                                                    </div>
                                                </div>                                                      
                                        </ListGroupItem>                        
                                    </ListGroup>  
                                </div>  
                                <br/><br/>          
                            </div>
                           
           
           
        )
    }
}

export default AudioCard;