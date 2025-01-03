import React, { useState } from 'react'

export default function TextForm(props) {
    function handleOnClick() {
       let newText = text.toUpperCase();
       setText(newText);
       console.log("Clicked Button")
    }
    function handleOnChange(event) {
        setText(event.target.value);
       console.log("On Change")
    }
    let [text, setText] = useState("Enter text here");
  return (
    <div>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-floating">
            <textarea className="form-control" value ={text} onChange={handleOnChange} id="floatingTextarea"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}> Connvert to Uppercase</button>
        </div>
    </div>
  )
}
