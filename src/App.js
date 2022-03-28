//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './components/styles.css';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null)

   const displayAlert = (message, type) => {
     setAlert({
       msg: message,
       name: type
     })

     setTimeout(() => {
      setAlert(null) 
     }, 1500);
   }  

  const [mode, setMode] = useState('')

  const toggleMode = () => {

    if(mode === ''){
      setMode('darkTheme');
      displayAlert('Dark mode has been enabled !', 'success')

      // To change title and blink it to bring it to notice

      // setInterval(() => {
      //   document.title = 'Textutils is amazing'
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'Install Textutils now!'
      // }, 1500);



    }
    else{
      setMode('');
      displayAlert('Light mode has been enabled !', 'success')
    }
  }


  

  return (
    <>

    <Navbar title ="TEXTUTILS" mode= {mode} toggleMode = {toggleMode}></Navbar>
    <Alert alert = {alert}></Alert>
    <div className= {`container1 py-5 ${mode}` }>
       <TextForm heading = "Enter the text to analyze below!" displayAlert = {displayAlert}></TextForm>
    </div>


    </>
  );
}

export default App;
