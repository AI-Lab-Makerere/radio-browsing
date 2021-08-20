import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "./Components/Results";
import PageWrapper from "./Components/PageWrapper";
import Box from "./Components/box";
import Tag from "./Components/Tags";
import drag from "./Components/TagsPage";

function App(){
  return (
    <Router>
      <PageWrapper>
        
        <Route 
          exact = {true}
          path = "/"
          component = {Results}
        />

        <Route 
          path = "/tags"
          component = {Tag}
        />

        <Route 
          path = "/drag"
          component = {drag}
        />

      </PageWrapper>
    </Router>
  );
}

export default App;
