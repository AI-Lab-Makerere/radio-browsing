import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleTopic extends Component{
    render(){
        return(
            
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-charts-portfolio mb-30">
                        <img src="assets/img/bg-img/79.png" alt=""/>
                                    
                        <div className="overlay-content">
                            <div className="text-center">
                                <h5><Link to={`/topicDetails/${this.props.name}/${this.props.summary}`}  style={{color:'white'}}>{this.props.name}</Link></h5>
                                <p>{this.props.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default SingleTopic;