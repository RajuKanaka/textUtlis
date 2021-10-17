import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Navbar name="textUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>

            <Route path="/">
              <TextForm header="Enter your text below" mode={mode} />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
