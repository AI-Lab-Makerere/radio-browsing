import React, {Component} from 'react'
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';

import SingleTopic from '../singles/SingleTopic';

const details = [
    {'name':'topic one', 'summary':'this is a brief one'},
    {'name':'topic two', 'summary':'this is a killable instance of the latest object'},
    {'name':'topic three', 'summary':'this is a brief one'}
]

class Topics extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="topics"
                />
                <section className="razo-charts-portfolio-area section-padding-80">
                    <div className="container">
                        <h2 style={{color:'black'}}>TOPICS</h2>
                        <div className="row">
                            {details.map((det,index) => {
                                return <SingleTopic {...det} key={index} />
                            })}
                        </div>
                    </div>        
                </section> 
                <Footer />
           </div>
        )
    }
}




export default Topics;