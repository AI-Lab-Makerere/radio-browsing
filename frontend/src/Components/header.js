import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div>
                <div className="razo-social-share-area">
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="youtube"><i className="fa fa-youtube-play"></i></a>
                    <a href="#" className="ss-close-btn"><i className="arrow_right"></i></a>
                </div>
                
                <header className="header-area">
                  
                    <div className="main-header-area">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">
                               
                                <nav className="classy-navbar justify-content-between" id="razoNav">

                                    
                                    <a className="nav-brand" href="index.html"><h1>{this.props.title}</h1></a>

                                    
                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>

                                    
                                    <div className="classy-menu">
                                        
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>

                                       
                                        <div className="classynav">
                                            <ul id="nav">
                                                <li><a href="./index.html">Home</a></li>
                                                <li><a href="#">Pages</a></li>
                                            </ul>

                                            
                                            <div className="social-share-icon">
                                                <i className="social_share" style={{color:'black'}}></i>
                                            </div>

                                        </div>
                                       
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;