import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/radiologo.png"


const Footer = (props) => {
    return (
        <footer id="footer" >
            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                    <img src={logo} alt="logo" style={{width:'100px', height:'50px'}} />
                    </div>
                </div>
                <div className="text-center text-md-right pt-3 pt-md-0" style={{marginTop:'10px'}}>
                    <h4 className="text-muted">NLP Radio Browser</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;