import React, { useState } from 'react'

export default function About(props) {

  let myStyle = {
    color: (props.mode=='light')?'black':'white',
    backgroundColor: (props.mode=='light')?'white':'black'

  }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnStatus,setBtnStatus] = useState("Enable Dark mode")

    // const onClickHandler = () => {
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnStatus("Disable dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnStatus("Enable dark mode")
    //     }
    // }

  return (
    <>
    <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className='container my-3'>
    <h2 className='my-3'>About Us</h2>
    </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Analyze your text</strong>  
      </button>
    </h2>
    <div id="flush-collapseOne" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">TextUtils gives you a way to analyze your text quickly and effeciently. Be it word count or charecter count</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">TextUtils is a free charecter counter toolthat provides instant charecter count and word count statistics for a given text. Textutils reports the number of words and charecters. Thus it is suitable for writting text with word/charecter limit.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Browser Compatibility</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">This word counter software works in any web browsers such as chrome,firefox, internet explorer, safari, opera. It suits to count charecters in facebook, blogs, books, excel document, pdf document, essays etc.</div>
    </div>
  </div>
</div>
{/* <button className='my-3 btn btn-primary' type="button" onClick={onClickHandler}>{btnStatus}</button> */}

    </>
  )
}
