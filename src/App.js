import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//      <TextForm heading="Enter the text to analyze"></TextForm>
//      <About></About>



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
    </div>
    </>
  );
}

export default App;
