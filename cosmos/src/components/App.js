import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const [data, setData] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
