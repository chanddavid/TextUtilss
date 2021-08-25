
import './App.css';
import About from './components/About';
// import Navbar from './components/Navbar';
import Navbarmode from './components/Navbarmode';
// import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Textformmode from './components/Textformmode';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [mode, newMode] = useState('light')

  const [text, newText] = useState('Dark Mode')

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const toggleClick = () => {
    if (mode === 'light') {
      newMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode activated', 'success')

    }
    else {
      newMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode activated', 'success')


    }
    newText('Light Mode')
  }


  return (
    <>
      <Router>
        <Navbarmode title="TextUtilss" aboutText="About me" mode={mode} toggleClick={toggleClick} text={text} />
        <Alert alert={alert} />
        {/* <Navbar title="TextUtilss" aboutText="About me" /> */}
        <div className="container my-3">
          {/* <TextForm heading="Enter Your Text To Analyze" /> */}
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textformmode heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;



