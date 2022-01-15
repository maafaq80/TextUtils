import './App.css';
import Navbar from './/components/Navbar.js'
import Textform from './/components/Textform.js'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert]=useState("")
  const showAlert=(message,type)=>{
    setAlert({msg:message,
              type:type})
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#051c33"
      showAlert("dark mode has been enabled ","success");
      document.title = "TextUtils Dark-Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled" , "success");
      document.title = "TextUtils Light-Mode"
    }
  }

  return (
  <>
   
    <Router>      
          <Navbar title="TEXTUTILS" about="ABOUT US " mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
   <Routes>
         
          <Route path="/" exact element={ <Textform  mode={mode} toggleMode={toggleMode}/>}></Route>
          <Route  path="/about" exact element={<About mode={mode}/>}></Route>
         
 
  </Routes>
  </Router>
  
   
  </>
  );
}

export default App;
