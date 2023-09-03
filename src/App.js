import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//      <TextForm heading="Enter the text to analyze"></TextForm>
//      <About></About>



function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"></Navbar>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"></TextForm>
    </div>
    </>
  );
}

export default App;
