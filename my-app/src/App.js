import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

let name = "Vaibhav";

function App() { 
  return (
  <>
    <Navbar title="Text-Utils" homeText="Home"  aboutText="About-Text-Utils"/>
    <TextForm heading="Enter the Text to Analyze"/>
  </>
  );
}

export default App;
