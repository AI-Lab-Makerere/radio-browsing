import React, {Component} from "react";
import PageWrapper from "./Components/PageWrapper";
import Audio from "./Components/Pages/audio";
import Tag  from "./Components/Pages/tag"
import Home from "./Components/Pages/home";
import Topic from "./Components/Pages/topic";
import Search from "./Components/Pages/search";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicDetails from "./Components/Pages/TopicDetails";

function App(){
  return (
    <Router>
      <PageWrapper>

          <Route 
            exact = {true}
            path ="/"
            component = {Home}
          />
        
          <Route 
            exact = {true}
            path ="/audios"
            component = {Audio}
          />
        
          <Route 
            path = "/topics"
            component = {Topic}
          />

          <Route 
            path = "/tags"
            component = {Tag}
          />

          <Route 
            path = "/search"
            component = {Search}
          />
        
      </PageWrapper>
    </Router>
  );
}

export default App;
