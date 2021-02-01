import React from "react";
import "./App.scss";
import Photogallery from "./components/photogallery/Photogallery";

const App = () => {
  if (process.env.NODE_ENV === "production") {
    console.log("In Production Mode");
  } else if (process.env.NODE_ENV === "development") {
    console.log("In development Mode");
  }

  return (
    <>
      <Photogallery />
    </>
  );
};

export default App;
