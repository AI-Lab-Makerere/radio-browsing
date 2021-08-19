import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import Header from './header';

class Audio extends Component {
    render(){
        return(
            <div>
                
                <section >
                    <div className="container">  
                        <Card className="text-center card-bg" style={{marginTop:'25px', width:'300px', height:'400px', boxShadow:'0.8px 0.5px 2px 0.2px'}}>
                            <form action="" method="post">
                                <div className="card-header card-bg" data-wow-delay="100ms"  >
                                    <h4 style={{color:'dimgray'}}>{this.props.id}</h4>
                                    <div>
                                        
                                        <div className="audio-player">
                                            <audio className="audio" preload="auto" controls style={{}}>
                                                <source src={`${this.props.audio_name}`}/>
                                            </audio>
                                        </div> 

                                    </div>         
                                </div>
                                <div id="accordion" style={{backgroundColor:'#cacacf', marginTop:'5px', width:'100%'}}>
                                    <div className="card card-bg">
                                        <div className="card-header " id="hOne" >
                                            <a className="btn btn-link text-centered collapsed" data-toggle="collapse" aria-expanded="false" data-target={`${this.props.id}one`} aria-controls="one">
                                                    <i className="icon_globe"></i> Translate    
                                            </a>
                                        </div>
                                        <div id={`${this.props.id}one`} className="collapse " aria-labelledby="hOne">
                                            <div className="card-body">
                                                <textarea className="form-control text-area" id="message" name="message" style={{width: '100%', border: '0.5%'}} placeholder="Add translation"></textarea>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="card card-bg" >
                                        <div className="card-header" id="hTwo">
                                            <a className="btn btn-link" data-toggle="collapse" aria-expanded="false" data-target={`${this.props.id}two`}  aria-controls="two">
                                                <i className="icon_pin"></i> Location
                                            </a>
                                        </div>
                                        <div id={`${this.props.id}two`}  className="collapse " data-parent="#accordion">
                                            <div className="card-body">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Location" />
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="card card-bg" >
                                        <div className="card-header" id="hThree">
                                            <a className="btn btn-link" data-toggle="collapse" aria-expanded="false" data-target={`${this.props.id}one`}  aria-controls="three">
                                                <i className="icon_mic"></i> Who's speaking? 
                                            </a>
                                        </div>
                                        <div id={`${this.props.id}three`}  className="collapse " data-parent="#accordion">
                                            <div className="card-body">
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
                                        </div>
                                    </div>
                                </div>  
                                <button className="btn btn-link" >
                                    Submit
                                </button>    
                            </form>  
                        </Card>
                    </div>
                </section>
            </div>
            

        )
    }
}

export default Audio;