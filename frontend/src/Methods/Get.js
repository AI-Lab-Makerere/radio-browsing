import axios from 'axios';
import React from 'react';
import client from './Client';

export default function Get() {
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [fin, setFin] = React.useState(null)

    const id = [1,2,3,4];
    const final = [];

    
        React.useEffect(() => {
            for (let i of id ){
                client.get(`${i}`).then((response) => {
                    console.log(response)
                final.push(response) ? console.log("pushed") : console.log("no")
                
                }).catch(error => {
                    setError(error);
                });
            }
            console.log(final)
            setFin(final) ? console.log("final set") : console.log("not set")
        }, []);

    if (error) return `Error:$(error.message)`;
    if (!post) return `${final}`;

    for(let k in final){
        console.log(k)
        setPost(k.data)
        return (
            <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>   
    );
    }
    
}

