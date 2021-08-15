import React,{useState, useEffect} from 'react'
import { API } from "../../utils";
import Footer from '../Layout/Footer'
import NavBar from '../Layout/navBar'
const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        await API.get("/")
            .then((response) => {
                setData(response.data);
                console.log(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(`error occured: ${error}`);
                setLoading(false);
            });
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div>
            {loading && "loading"}
            <NavBar page="home" />

            <section className="razo-music-charts-area section-padding-80 bg-overlay">
                <div className="container">
                    <h2>
                        {data ? 
                        data.message
                        :
                        <p>Welcome to the NLP Audio Search Website</p>}
                    </h2>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
