import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavBar from '../commons/navBar';
import Footer from '../commons/Footer';

class Tags extends Component{
    render(){
        return(
            <div>
                <NavBar 
                    page="tags"
                />

                <Footer />
            </div>
        )
    }
}

export default Tags;