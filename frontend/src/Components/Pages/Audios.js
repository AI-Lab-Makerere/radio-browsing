import React, {Component} from 'react'
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';
import SingleAudio from '../singles/SingleAudio';

const details = [
    {'number':'1', 'audio':'assets/audio/all.mp3', 'audioName':'Audio 1'},
    {'number':'2', 'audio':'assets/audio/all.mp3', 'audioName':'Audio 2'},
    {'number':'3', 'audio':'assets/audio/all.mp3', 'audioName':'Audio 3'}
]

class Audios extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="audios"
                />
                <section className="razo-music-charts-area section-padding-80">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-12">
                                <div className="section-heading text-center white">
                                    <form action="index.html" method="post">
                                        <div className="row text-center">
                                           
                                                <input type="search" name="top-search-bar" className="form-control col-11" placeholder="Search Audios"/>   
                                            
                                            <div className="dropdown">   
                                                <select className="btn btn-secondary dropdown-toggle" type="button" name="Category" id="Category">               
                                                    <option value="tag" id="tag">Tag</option>
                                                    <option value="topic" id="topic">Topic</option>    
                                                </select>
                                          
                                            </div> 
                                            
                                        </div>  
                                    </form>
                                    <br/>
                                    <h2 style={{color:'black'}}>AUDIOS</h2>
                                </div>
                            </div>
                        </div>

                        {details.map((det, index) => {
                            return <SingleAudio {...det} key={index} />
                        })}
                              
            
                    </div>
                </section>

                <div >
                    <div className="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 style={{color:'black'}}>Comment</h2>
                                    <button type="button" className="btn close-btn" data-dismiss="modal"><i className="fa fa-times"></i></button>
                                </div>
                                <div className="modal-body">
                                    <div className="col-lg-12 mt-5 mt-lg-0">

                                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control col-10" id="name" placeholder="Your Name" required/>
                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                                </div>
                                            </div>
                                        
                                            <div className="form-group mt-3">
                                                <textarea className="form-control" name="message" rows="5" placeholder="Enter your Comment" required></textarea>
                                            </div>
                                            <button className="text-center btn btn-secondary" type="submit">Submit</button>
                                        </form>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Audios;