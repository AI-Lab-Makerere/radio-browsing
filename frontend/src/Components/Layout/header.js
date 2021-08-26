import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1><div className="count-box" >
                        <a href="index.html">
                            <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                        </a>
                    </div>
                        {props.title}

                    </h1>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Search</a></li>
                            <li><a className="nav-link scrollto" href="/tags">Tags</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>
    )

}

export default Header;