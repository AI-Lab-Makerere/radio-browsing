import React, {Component} from 'react'

class Audios extends Component{
    render(){
        return(
            <div>
                <section className="razo-music-charts-area section-padding-80 bg-overlay bg-img jarallax" style={{backgroundImage:"url('assets/img/bg-img/ai.png')"}}>
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-12">
                                <div className="section-heading text-center white">
                                    <form action="index.html" method="post">
                                        <div className="row ">
                                            
                                            <input type="search" name="top-search-bar" className="form-control col-10" placeholder="Search Audios" style={{marginLeft:'40px'}}/>   

                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" aria-haspopup="true" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    categories
                                                </button>    
                                                <ul className="dropdown-menu" aria-labelledby="dropdownButton">
                                                    <li><a className="dropdown-item" href="#">- Dropdown Item</a></li>
                                                    <li><a className="dropdown-item" href="#">- Dropdown Item</a></li>
                                                    <li><a className="dropdown-item" href="#">- Dropdown Item</a></li>
                                                    <li><a className="dropdown-item" href="#">- Dropdown Item</a></li>
                                                </ul>
                                            </div> 
                                        </div>  
                                    </form>
                                    <br/>
                                    <h2>AUDIOS</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="100ms">
                                   
                                    <div className="music-content d-flex align-items-center row">
                                        <div className="sl-number">
                                            <h5>1.</h5>
                                        </div>                                        
                                        <div className="audio-player">
                                            <audio preload="auto" controls>
                                                <source src="assets/audio/all.mp3" />
                                            </audio>
                                        </div>
                                        <div className="music-title" style={{marginLeft:'10px'}}>
                                            <h5>Way Back Home</h5>
                                        </div>
                                    </div>
                                    <div className="music-price row">
                                        <a href="#" className="btn razo-btn btn-2" style={{marginRight:'10px'}}>Add Tag</a>
                                        <a href="#" className="btn razo-btn btn-2">Comment</a>
                                    </div>
                                </div>
                            </div>
                        </div>        
                        <div className="row">
                            <div className="col-12">
                                <div className="view-more-button text-center">
                                    <a href="#" className="btn razo-btn mt-50">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Audios;