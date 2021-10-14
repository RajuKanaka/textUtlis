import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";

function App() {
  return (
    <>
      <Navbar name="textUtils" />
      <div className="container">
        <TextForm header="Enter your text below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
