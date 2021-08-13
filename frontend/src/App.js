import React, {Component} from "react";
import PageWrapper from "./Components/PageWrapper";
import Audios from "./Components/Pages/Audios";
import Topics from "./Components/Pages/Topics";
import Footer from "./Components/Pages/Footer";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(){
  return (
    <Router>
      <PageWrapper>
        
          <Route 
            path ="/"
            component = {Audios}
          />
        
        
      </PageWrapper>
    </Router>
  );
}

export default App;
