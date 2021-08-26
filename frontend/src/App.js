import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "./Components/Results";
import PageWrapper from "./Components/Layout/PageWrapper";
import ImageUpload from "./Components/upload/image";
import AudioUpload from "./Components/upload/audio";
import Home from "./Components/home"
import Tags from "./Components/tags";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
      <PageWrapper>

        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          exact={true}
          path="/results"
          component={Results}
        />

        <Route
          path="/tags"
          component={Tags}
        />


        <Route
          path="/upload"
          component={AudioUpload}
        />

      </PageWrapper>
      </DndProvider>
    </Router>
  );
}

export default App;
