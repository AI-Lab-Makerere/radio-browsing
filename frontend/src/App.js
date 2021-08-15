import React, {Component} from "react";
import PageWrapper from "./Components/PageWrapper";
import Audios from "./Components/Pages/Audios";
import Topics from "./Components/Pages/Topics";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicDetails from "./Components/Pages/TopicDetails";
import Tags from "./Components/Pages/Tags";
import Testx from "./Components/Pages/axiosTest";
import GetAudios from "./Methods/GetAudios";

function App(){
  return (
    <Router>
      <PageWrapper>
        
          <Route 
            exact = {true}
            path ="/"
            component = {Audios}
          />
        
          <Route 
            path = "/topics"
            component = {Topics}
          />

          <Route 
            path = "/topicDetails/:topic/:summary"
            render ={(props) => <TopicDetails {...props} />}
            
          />

          <Route 
            path = "/tags"
            component = {Tags}
          />

          <Route 
            path = "/test"
            component = {GetAudios}
          />


      </PageWrapper>
    </Router>
  );
}

export default App;
