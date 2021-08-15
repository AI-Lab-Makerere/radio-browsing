import React, {Component} from 'react'
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';
import {Link} from 'react-router-dom';

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
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-charts-portfolio mb-30">
                                    <img src="assets/img/bg-img/79.png" alt=""/>
                                    
                                    <div className="overlay-content">
                                        <div className="text-center">
                                            <h5><Link to="/topicDetails"  style={{color:'white'}}>Topic Name</Link></h5>
                                            <p>Summary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </section> 
                <Footer />
           </div>
        )
    }
}

export default Topics;