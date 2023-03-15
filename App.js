

import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React , {useState} from 'react'

function App() {
 
  const [mode , setmode] = useState("light")    ;
  const switchbutton =()=>
  {
    if (mode === 'dark') 
    {
   setmode('light')  ;
   document.body.style.backgroundColor = 'white' ; }
    else
    {
      setmode("dark") ;
      document.body.style.backgroundColor = 'grey' ; 

    }
  }
  return (

    <>
    <Navbar Title='TextChanger' About = 'Abouttext'  mode ={mode} switchbutton ={switchbutton}
     />
 <TextForm  mode ={mode}  holdertxt  = "enter the text here " />


   </>
    );
}

export default App;
