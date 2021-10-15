// import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
    } else {
      setMode("dark");
      document.body.style.background = "#042743";
    }
  };
  return (
    <>
      <Navbar name="textUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm header="Enter your text below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
