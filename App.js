import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alerts from './Components/Alerts';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
        setAlert({msg:message, type:type});
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  const toggleMode = ()=>{
      if(mode==='dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Dark mode has been disabled now!!!!!','success');
        document.title = 'TextUtils - Light Mode';
      }
      else {
        setMode('dark');
        document.body.style.backgroundColor = '#05203c';
        showAlert('Dark mode has been enabled now!!!!!','success');
        document.title = 'TextUtils - Dark Mode';
      }
  }
  return (
    <>
           <Navbar title = "TextUtility App" section = "Contact" mode={mode} toggleMode={toggleMode}/>
           <Alerts alert={alert}/>
           <div className="container">
           <Form head="Write Something:" mode={mode} showAlert={showAlert}/>
           </div>
    </>     
  );
}

export default App;
