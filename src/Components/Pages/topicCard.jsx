import React from 'react'
import {Link} from 'react-router-dom';

const TopicCard = (props) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-charts-portfolio mb-30">
                <img src="assets/img/bg-img/79.png" alt="" />
                <div className="overlay-content">
                    <div className="text-center">
                        
                        <h4>{props.topic_name}</h4>
                        <Link to="/topicDetails" style={{ color: 'white' }}><h5>Audios</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCard
/*
<div className="single-charts-portfolio mb-30">
                <img src="assets/img/bg-img/79.png" alt="" />

                <div className="overlay-content">
                    <div className="text-center">
                        <h5><Link to="/topicDetails" style={{ color: 'white' }}>{props.id}</Link></h5>
                        <p>{props.topic_name}</p>
                    </div>
                </div>
            </div>
*/