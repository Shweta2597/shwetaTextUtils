import React, { useState } from 'react'


export default function TextForm(props) {

    const onTextChange = (event) => {
        console.log("Text Changed")
        setText(event.target.value)
    } 
    const onUpperClick = () => {
        console.log("Uppercase got clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const onLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const onClearText = () => {
        let newText = '';
        setText(newText)
    }
    const onCopyText = () => {
        navigator.clipboard.writeText(text);
        document.getElementById("copy-text").innerHTML = "Copied"
        setTimeout(() => {
            document.getElementById("copy-text").innerHTML = "Copy to Clipboard" 
        }, 2000);
    }

    const [text,setText] = useState("");

  return (
    <div>
        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'white':'black', color:props.mode === 'light'?'black':'white'}} value={text} onChange={onTextChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpperClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={onLowerClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={onClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" id="copy-text" onClick={onCopyText}>Copy to clipboard</button>
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length-1} words and {text.length} charecters</p>
            <p>{(text.split(" ").length-1)*0.008} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>
    </div>
  )
}