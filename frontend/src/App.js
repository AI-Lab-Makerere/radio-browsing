import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "./Components/Results";
import PageWrapper from "./Components/PageWrapper";

function App(){
  return (
    <Router>
      <PageWrapper>
        
        <Route 
          exact = {true}
          path = "/"
          component = {Results}
        />

      </PageWrapper>
    </Router>
  );
}

export default App;
