import React from 'react'
import { useState} from 'react'
export default function Textform(props) {
   const [text,setText]=useState("");
  let removeSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));

  }
   let handleCopy=()=>{
        var text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("TextCopied , success")
  }
  
   let handleButton=()=>{
       const newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to UPPERCASE" , "success")
   }
   let handleDownButton=()=>{
    const newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "success"  );
   }
   let clearText=()=>{
    const newText=""
    setText(newText);
}

   let handleChange=(event)=>{
       setText(event.target.value)
   }
    return (
        <>
       <div>
        <div className="mb-3">
                <div className="container">
                <textarea className="form-control my-5" id="myBox" rows="10" value={text} onChange={handleChange}   style={{ backgroundColor: props.mode === 'dark' ? '#082f55' : 'white' ,  color:props.mode==="dark"?"white":"black"}}></textarea>
                </div>
        </div>
        <div className="container">
        <button  type="button" className="btn btn-primary" id="ba" onClick={handleButton}>CONVERT TO UPPER-CASE</button>
        <button type="button" className="btn btn-primary mx-2 my-2" id="ba" onClick={handleDownButton}>CONVERT TO LOWER-CASE</button>
        <button type="button" className="btn btn-primary mx-2 my-2" id="ba" onClick={clearText}>CLEAR TEXT</button>
        <button type="button" className="btn btn-primary mx-2 my-2" id="ba" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2 my-2" id="ba" onClick={removeSpace}>Remove Extra Space </button>
        </div>
        </div>
          
        <div className="container my-3" align="Center" style={{color:props.mode==="dark"?"white":"black"}}>
          <h1><i >Summary</i></h1> 
          <b><p>{text.split('/\s+').filter((element)=>{return element.length!==0}).length} words and  {text.length} characters </p></b>
          <p>{0.008 * text.split('/\s+').filter((element)=>{return element.length!==0}).length} Minutes  : Time Required To Read The Text </p>
          <b id="Text">Preview</b>
          <p>{text}</p>
          </div>
            
    
        </>
    )
}
