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
          <h1>{props.heading}</h1>
          <div className="my-3">    
            <textarea className="form-control" value={text} id="myBox" 
            onChange ={HandleOnChange} rows="8"></textarea>
          </div>

          <div className="btn btn-secondary my-2 ms-3" onClick={HandleUpClick}>Convert to Uppercase</div>
          <div className="btn btn-secondary my-2 ms-3" onClick={HandleLowClick}>Convert to Lowercase</div>
          <div className="btn btn-secondary my-2 ms-3" onClick={HandleRevClick}>Reverse Text</div>
          <div className="btn btn-secondary my-2 ms-3" onClick={HandleCopyClick}>Copy Text</div>
          <div className="btn btn-secondary my-2 ms-3" onClick={HandleClrClick}>Clear Text</div>


   
        </div>

        <div className="container my-3">
          <h2>Your text summary :</h2>
          <p>👉{text.split(" ").length} words, {text.length} characters </p>
          <p>👉{0.08 * text.split(" ").length} Minutes read</p>
          <h2>Preview :</h2>
          <p>{text ===`${"Enter text here"||""}`?"Enter some text to preview here !":text}</p>
        </div>
  
      
      </>
    
  )
}
 