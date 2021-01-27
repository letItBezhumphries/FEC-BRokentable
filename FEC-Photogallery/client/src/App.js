import React from "react";
import "./App.scss";

const App = () => {
  if (process.env.NODE_ENV === "production") {
    console.log("In Production Mode");
  } else if (process.env.NODE_ENV === "development") {
    console.log("In development Mode");
  }

  return (
    <div className="hello-world-text">
      Hello World!! This is the Photo Gallery!
    </div>
  );
};

export default App;
