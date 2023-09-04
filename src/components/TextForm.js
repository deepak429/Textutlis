import React ,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
  const handleUpClick = () =>{
  const newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase","success");
  }


  const handleLpreview =()=>{
    const newText = text;
    // console.log(newText);
    // setText(newText)
    document.getElementById("preview").innerHTML = newText;
  }
   const handleClear =()=>{
    const newText = "";
    setText (newText)

  }

  const handleLowClick = () =>{
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
    }

  const handleOnChange = (event)=>{
    // console.log("on change");
    
    setText(event.target.value);
  }



  const handleCopy = ()=>{
    const text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text was copy","success");
  
  }
  const [text, setText] = useState("")
  // const [prev, setPrev] =useState("")

  // setText("some vailed text");
  return (
    <>
    
  <div className="mb-3 bg-" style={{color:props.mode==='light'?'black':'white'}}>
    <label htmlFor="mybox" className="form-label fs-1  fw-normal" >{props.heading}</label>
    <textarea className="form-control " onChange={handleOnChange} value={text} id="mybox" rows="8" style={{ background:props.mode==='light'?'#e9e9e9':'#6a6a6abd',color:props.mode==='light'?'black':'white'}} ></textarea>
  </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button> 
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLpreview}>Preview</button> 
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button> 
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear} >Clear</button> 

<div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
  <h2>Preview</h2>
  <p id = "preview"> {text.length===0?text:"Click on Preview"}</p>
 
</div>
      </>
  )
}

TextForm.propTypes = {
    heading:PropTypes.string
}

TextForm.defaultProps = {
    heading:"text app"
}
