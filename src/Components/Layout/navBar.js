import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render(){
        return(
            <header className="header-area">
     
                    <div className="main-header-area">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">
                                
                                <nav className="classy-navbar justify-content-between" id="razoNav">
 
                                    <h2>RADIO-BROWSER/{this.props.page}</h2>
                                    

                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>
    
                                    <div className="classy-menu">
                                    
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>
    
                                        <div className="classynav">
                                            <ul id="nav">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/audios">Audios</Link></li>   
                                                <li><Link to="/topics">Topics</Link></li>
                                                <li><Link to="/tags">Tags</Link></li>
                                                <li><Link to="/search">Search</Link></li>
    
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
            </header>             
        )
    }
}

export default NavBar;     