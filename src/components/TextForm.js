import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, SetText] = useState("Enter text here")

  const HandleUpClick = () => {
   // console.log("uppercase button clicked" + text);
    let newText = text.toLocaleUpperCase();
    SetText(newText);
    props.displayAlert('Converted to uppercase!', 'success')
  }

  const HandleLowClick = () => {
     let newText = text.toLocaleLowerCase();
     SetText(newText);
     props.displayAlert('Converted to lowercase!', 'success')

   }
   const HandleRevClick = () => {
    let newText = text.split("").reverse().join("");
    SetText(newText);

    props.displayAlert('Text reversed!', 'success')

  }
  
  const HandleCopyClick = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    // let newText = "";
    // SetText(newText);

    props.displayAlert('Copied to clipboard!', 'success')

  }

  const HandleClrClick = () => {
    let newText = "";
    SetText(newText);

    props.displayAlert('The text is cleared. Enter some text to analyze below!', 'success')

  }

  const HandleOnChange = (event) => {
    //console.log("changed button clicked");
    SetText(event.target.value)
  }


  return (
      <>
        <div className='container'>
          <h2>{props.heading}</h2>
          <div className="my-2">    
            <textarea className="form-control" value={text} id="myBox" 
            onChange ={HandleOnChange} rows="8"></textarea>
          </div>

          <button disabled = {text.length === 0} className="btn btn-secondary my-2 ms-3" onClick={HandleUpClick}>Convert to Uppercase</button>
          <button disabled = {text.length === 0} className="btn btn-secondary my-2 ms-3" onClick={HandleLowClick}>Convert to Lowercase</button>
          <button disabled = {text.length === 0} className="btn btn-secondary my-2 ms-3" onClick={HandleRevClick}>Reverse Text</button>
          <button disabled = {text.length === 0} className="btn btn-secondary my-2 ms-3" onClick={HandleCopyClick}>Copy Text</button>
          <button disabled = {text.length === 0} className="btn btn-secondary my-2 ms-3" onClick={HandleClrClick}>Clear Text</button>


   
        </div>

        <div className="container mt-3">
          <h3>Your text summary :</h3>
          <p>👉{text.split(/\s+/).filter((ele) => {
            return ele.length !== 0
          }).length} words, {text.length} characters </p>
          <p>👉{0.08 * text.split(" ").length} Minutes read</p>
          <h3>Preview :</h3>
          <p>{text ===`${"Enter text here"||""}`?"Enter some text to preview here !":text}</p>
        </div>
  
      
      </>
    
  )
}
 