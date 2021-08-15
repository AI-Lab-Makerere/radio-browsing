import React, {Component} from 'react'
import NavBar from '../Layout/navBar';
import Footer from '../Layout/Footer';

class TopicDetails extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="topic details"
                />
                
                <Footer />
            </div>
        )
    }
}

export default TopicDetails;