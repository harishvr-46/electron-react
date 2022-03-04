import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not

  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
<Navbar title="Text Operations" mode={mode} toggleMode={toggleMode} />
<TextForm heading="Enter your Text here" mode={mode}/>
    </>
  );
}

export default App;