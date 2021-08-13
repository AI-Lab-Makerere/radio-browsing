import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PageWrapper extends Component {

    render() {
        return (
            <div>
                <div id="preloader">
                    <div>
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                        <span>Wait, please...</span>
                    </div>
                </div>

                <div className="razo-social-share-area">
                    <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
                    <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
                    <Link to="#" className="pinterest"><i className="fa fa-pinterest"></i></Link>
                    <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
                    <Link to="#" className="youtube"><i className="fa fa-youtube-play"></i></Link>
                    <Link to="#" className="ss-close-btn"><i className="arrow_right"></i></Link>
                </div>
                <header className="header-area">
     
                    <div className="main-header-area">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">
                                
                                <nav className="classy-navbar justify-content-between" id="razoNav">
 
                                    <Link className="nav-brand" to="/"><img src="assets/img/core-img/logo.png" alt=""/></Link>

                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>
    
                                    <div className="classy-menu">
                                    
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>
    
                                        <div className="classynav">
                                            <ul id="nav">
                                                <li><Link to="/">Audios</Link></li>   
                                                <li><Link to="/">Topics</Link></li>
                                                <li><Link to="/">Tags</Link></li>
                                                <li><Link to="/">About</Link></li>
                                                                                            
                                                
                                            </ul>

                                            <div className="social-share-icon">
                                                <i className="social_share"></i>
                                            </div>
    
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;