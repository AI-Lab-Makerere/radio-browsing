import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render(){
        return(
           <div>
               <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center justify-content-between">

                    <h1><div class="count-box" > 
                        <a href="index.html"> 
                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                        </a>
                        </div>
                        Results
                        
                    </h1>
            
                    <nav id="navbar" class="navbar">
                        <ul>
                        <li><a class="nav-link scrollto active" href="#">Search</a></li>
                        <li><a class="nav-link scrollto" href="/box">Tags</a></li>
                        </ul>  
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    </div>
                </header>
           </div>
        )
    }
}

export default Header;