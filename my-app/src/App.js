
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() { 
  const [alert, setAlert] = useState(null);

let showAlert = (msg, type) =>{
    
setAlert({
  msg : msg,
  type : type
});

setTimeout(() => {
  setAlert(null);
}, 2000);


}

  const toggleMode = () =>{
  if(mode === "dark"){
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
  }
  else{
    setDarkMode("dark");
    document.body.style.backgroundColor = "grey";
    showAlert("Dark Mode Has Been Enabled", "success");
}   
}
  const [mode, setDarkMode] = useState("light"); 
  return (
  <Router>
    <Navbar
      title="Text-Utils"
      homeText="Home"
      aboutText="About-Text-Utils"
      mode={mode}
      toggleMode={toggleMode}
    />

    <Alert alert={alert} />

    <div className="container my-3">
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the Text to Analyze"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />

        <Route
          path="/about"
          element={<About mode={mode} />}
        />
      </Routes>
    </div>
  </Router>
);
}

export default App;
