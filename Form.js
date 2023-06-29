import React,{useState} from 'react'

var newText;
export default function Form(props) {
    const handleUpClickup = ()=>{
        console.log("Uppercase clicked");
        // setText("You clicked on handleUpClick");
        
        newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase Successfully!!!!!','success');
    }
    const handleUpClicklo = ()=>{
        console.log("Lowercase clicked");
        // setText("You clicked on handleUpClick");
        
        newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase Successfully!!!!!','success');
    }
    const handlereplacetext = ()=>{
        console.log("Replace Clicked");
        
        // setText("You clicked on handleUpClick");
        
        newText = text.replaceAll(word1,word2);
        setText(newText);
        props.showAlert('Words replaced Successfully!!!!!','success');
    }
    const handlecleartext = ()=>{
        setText('');
        setRepText1('');
        setRepText2('');
        props.showAlert('Text Cleared Successfully!!!!!','success');
    }
    const handlecopytext = ()=>{
        let text = document.getElementById("textArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied to Clipboard Successfully!!!!!','success');
    }
    const handleOnChange = (event)=>{
        console.log("Onchange");
        setText(event.target.value)
    }
    const handleOnChangeWord1 = (event)=>{
        console.log("Onchange Word");
        setRepText1(event.target.value)
    }
    const handleOnChangeWord2 = (event)=>{
        console.log("Onchange Word");
        setRepText2(event.target.value)
    }
    const [text, setText] = useState('');
    const [word1, setRepText1] = useState('');
    const [word2, setRepText2] = useState('');
    // setText("Write Here");
    return (
    <div>
  <div className=" container mb-3 mx-3 my-3">
    <label htmlFor="textArea" className={`form-label text-${props.mode==='dark'?'light':'dark'}`}>{props.head} </label>
    <textarea className={`text-${props.mode==='dark'?'light':'dark'}`} name="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#05203c':'white'}} id="textArea" cols="120" rows="10"></textarea>
  </div>
  <button type="submit" className="btn btn-primary mu-2" onClick={handleUpClickup}>Convert to Uppercase</button>
  <button type="submit" className="btn btn-primary mu-2 mx-2" onClick={handleUpClicklo}>Convert to Lowercase</button>
  <button type="submit" className="btn btn-primary mu-2 mx-2" onClick={handlecleartext}>Clear Text</button>
  <button type="submit" className="btn btn-primary mu-2 mx-2" onClick={handlecopytext}>Copy Text to Clipboard</button>
  <p className={`mx-3 my-3 text-${props.mode==='dark'?'light':'dark'}`}>There are total: <br />{text.length} characters <br />{text.split(' ')[text.split(' ').length-1]===''?text.split(' ').length-1:text.split(" ").length} words</p>
  <div className="container">
  <textarea className={`mx-3 text-${props.mode==='dark'?'light':'dark'}`} name="form-control" value={word1} style={{backgroundColor: props.mode==='dark'?'#05203c':'white'}} onChange={handleOnChangeWord1} cols="30" rows="1"></textarea>
  <textarea className={`mx-3 text-${props.mode==='dark'?'light':'dark'}`}  name="form-control" 
  value={word2} style={{backgroundColor: props.mode==='dark'?'#05203c':'white'}} onChange={handleOnChangeWord2} cols="30" rows="1"></textarea>
  <button type="submit" className="btn btn-primary mx-4" onClick={handlereplacetext}>Replace Text</button>
  </div>
  <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview</h2>
  <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text}</p>
</div>
  )
}