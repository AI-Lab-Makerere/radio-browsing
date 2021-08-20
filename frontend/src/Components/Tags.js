import React, {Component} from 'react';
import { Badge, CloseButton } from 'react-bootstrap';
import Header from './header';

class Tag extends Component{
    render(){
        return(
            <div>
                <Header title={<i className="bi-tags-fill"> tags</i>}/>
                    <div className="container" style={{marginTop:'100px'}}>
                        <div className="row">

                            <div className="col-sm-1 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                <Badge draggable className="tag" pill bg="secondary"> tags<CloseButton className="close" variant="white"/></Badge>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Tag;