import React, {Component} from 'react'
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';
import {Link} from 'react-router-dom';

class TopicDetails extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="topic details"
                />
                


                <section className="razo-blog-area section-padding-80-0">
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-12 col-md-8">
                                <div className="weekly-news-area mb-50">
                                    
                                    <div className="section-heading">
                                        <h2 style={{color:'black'}}>topic details</h2>
                                    </div>

                                    
                                    <div className="featured-post-area bg-img bg-overlay mb-30" style={{backgroundImage:'url(assets/img/bg-img/79.png)'}}>
                                        
                                        <div className="post-overlay">
                                            <div className="post-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> Comment</a>
                                            </div>
                                            <h2>{this.props.match.params.summary}</h2>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <h3 style={{color:'black'}}>{this.props.match.params.topic}</h3>
                                        
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-12 col-md-4">
                                <div className="trending-news-area mb-50">

                                    
                                    <div className="section-heading">
                                        <h4 style={{color:'black'}}>Other Topics</h4>
                                    </div>

                                    
                                    <div className="featured-post-area small-featured-post bg-img bg-overlay mb-30">
                                        
                                        <div className="post-overlay">
                                            <div className="post-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
                                            </div>
                                            <a href="single-blog.html" className="post-title">Hawaii braces for Hurricane Lane</a>
                                        </div>
                                    </div>

                                    
                                    <div className="razo-single-post d-flex mb-30">
                                        
                                        <div className="post-thumbnail">
                                            <a href="single-blog.html"><img src="assets/img/bg-img/79.png" alt=""/></a>
                                        </div>
                                        
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
                                            </div>
                                            <a href="/topicDetails" className="post-title">Hurricane Lane brings 19 inches of rain</a>
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

export default TopicDetails;