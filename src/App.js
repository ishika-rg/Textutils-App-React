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

  const searchText =  () => {

    let str = document.querySelector('.form-control');
    console.log(str);

    let para = document.getElementById('myBox');
    console.log(para);

    // if(para.includes(str)){
    //   console.log('got it');

      

    // }else{
    //   console.log('not found')
    // }

    // if(para.match(str)){
    //   console.log('got it')

    // }else{
    //   console.log('not found')
    // }

    const word = str.value;
    console.log(word)

    let text = para.innerHTML;
    console.log(text)


    let regex = new RegExp(word, 'gi');

    text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
    const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
    para.innerHTML = newText;


  }


  

  return (
    <>

    <Navbar title ="TEXTUTILS" mode= {mode} toggleMode = {toggleMode} searchText = {searchText} ></Navbar>
    <Alert alert = {alert}></Alert>
    <div className= {`container1 pt-1 ${mode}` }>
       <TextForm heading = "Enter the text to analyze below!" displayAlert = {displayAlert} searchText = {searchText}></TextForm>
    </div>


    </>
  );
}

export default App;
