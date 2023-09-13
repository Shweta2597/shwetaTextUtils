import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode} />}>
          {/* <About></About> */}
        </Route>
        <Route exact path="/"
         element={<TextForm showAlert={showAlert} heading="Try TextUtils - Enter the text to analyze" mode={mode}> </TextForm>}>
        </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
