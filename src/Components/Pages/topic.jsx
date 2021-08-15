import React, { useState, useEffect } from 'react'
import { API } from '../../utils'
import NavBar from '../Layout/navBar'
import Footer from '../Layout/Footer'
import TopicCard from './topicCard'

const Topic = () => {

    const [topicList, setTopicList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTopics = async () => {
        setLoading(true);
        await API.get("/search/topics")
            .then((response) => {
                setTopicList(response.data.data.topics);
                console.log(response.data.data.topics)
                setLoading(false);
            })
            .catch((error) => {
                console.log(`error occured: ${error}`);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchTopics();
    }, []);
    return (
        <div>
            {loading && "loading"}
            <NavBar page="topics" />
            <section className="razo-charts-portfolio-area section-padding-80">
                <div className="container">
                    <h2 style={{ color: 'black' }}>TOPICS</h2>
                    <div className="row">
                        {topicList.length > 0
                            ? topicList.map((topic) => (
                                    <TopicCard number={topic.id} topic_name={topic.topic_name} />
                            ))
                            : "Nothing"}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Topic
