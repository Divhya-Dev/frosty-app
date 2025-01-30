import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import { useState } from 'react';
import Alerts from './components/Alerts.js';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alertMsg, setAlert] = useState(null);
  

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#e2e3e5';
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);

  };

  let themeChange = color =>{
    document.body.style.backgroundColor = color;
  };

  return (
    <>
     {/* <BrowserRouter>
      <Navbar dropName= 'Yulo' modeType = {mode} onToggle= {toggleMode} themeChange ={themeChange}/>
      <Alerts mode={mode} alert = {alertMsg}></Alerts>
      <div className='container my-3' >
     
      <Routes>  
        <Route exact path="/" element={<TextForm heading='Senku Day One' modeType={mode} alert = {showAlert} />} />
        <Route exact path="/about" element={<About></About>} />
 
    </Routes>
    
    </div>
    </BrowserRouter> */}
    <Navbar dropName= 'Yulo' modeType = {mode} onToggle= {toggleMode} themeChange ={themeChange}/>
      <Alerts mode={mode} alert = {alertMsg}></Alerts>
      <div className='container my-3' >
      <TextForm heading='Senku Day One' modeType={mode} alert = {showAlert} />
      {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
