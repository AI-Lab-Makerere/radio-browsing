import React, {Component} from 'react';

class SingleAudio extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-12">
                <div className="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="100ms">
                   
                    <div className="music-content d-flex align-items-center row">
                        <div className="sl-number">
                            <h5>{this.props.number}.</h5>
                        </div>                                        
                        <div className="audio-player">
                            <audio preload="auto" controls>
                                <source src={`${this.props.audio}`} />
                            </audio>
                        </div>
                        <div className="music-title" style={{marginLeft:'10px'}}>
                            <h5>{this.props.audioName}</h5>
                        </div>
                    </div>
                    <div className="music-price row">
                        <a href="#" className="btn razo-btn btn-2" style={{marginRight:'10px'}}>Add Tag</a>
                        <a href="#" className="btn razo-btn btn-2" data-toggle="modal" data-target="#searchModal">Comment</a>
                    </div>
                </div>
                <br/>
            </div>
        
        </div> 
        )
    }
}

export default SingleAudio;