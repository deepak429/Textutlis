// import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert()
    },3000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 29 64)";
      showAlert(" Dark mode has been enable","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enable","success");
    }
  };
  return (
    <>
      <Router>
      <Navbar co="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert} />
        <div className="container my-3">
        <Routes>
            <Route exact  path="/about" element={ <About mode={mode} />}/>
            <Route exact  path="/home" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />}/>
            </Routes>
            </div> 
     </Router>
    </>
  );
}
export default App;
