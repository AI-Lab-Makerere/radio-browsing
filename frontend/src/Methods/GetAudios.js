import React, {Component} from 'react';
import client from './Client';

class GetAudios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Audios:[]
        }
    }

    getAll() {
        client
            .get(`/posts`, {})
            .then( response => {
                const data = response.data
                console.log(data)
                const audios = data.map(a =>
                    <div>
                    <h1 style={{color:'blueviolet'}}>{a.title}</h1>
                    <p>{a.body}</p>
                    </div>
                )

                this.setState({
                    audios
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    componentDidMount(){
        this.getAll()
    }

    render(){
        return(
            <div>
                {this.state.audios}
            </div>
        )
    }
}

export default GetAudios;