import React from 'react';
import {Link} from "react-router-dom";

const PageWrapper = (props) => {

        return (
            <div>
                {props.children}
            </div>
        )
    
}

export default PageWrapper;