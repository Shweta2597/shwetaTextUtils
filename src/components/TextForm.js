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
        props.showAlert("Converted to Uppercase", "success");
    }
    const onLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const onClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const onCopyText = () => {
        navigator.clipboard.writeText(text);
        // document.getElementById("copy-text").innerHTML = "Copied"
        // setTimeout(() => {
        //     document.getElementById("copy-text").innerHTML = "Copy to Clipboard" 
        // }, 2000);
        props.showAlert("Text copied to clipboard", "success");
    }

    const [text,setText] = useState("");

  return (
    <div>
        <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'} mb-3`}>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'white':'black', color:props.mode === 'light'?'black':'white'}} value={text} onChange={onTextChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onUpperClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onLowerClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" id="copy-text" onClick={onCopyText}>Copy to clipboard</button>
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
            <h4>Your text summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
            <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*0.008} minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:'Nothing to preview!'}</p>
        </div>
    </div>
  )
}