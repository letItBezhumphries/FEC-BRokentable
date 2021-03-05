import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PhotosSection from "./components/photosSection/PhotosSection";
import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Route exact path="/restaurants/:id" component={PhotosSection} />
    </div>
  );
};

export default App;
