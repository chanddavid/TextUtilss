
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + setText);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handledownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
            ;
    }
    // const intoTitleCase = () => {
    //     let newText = text.split(" ").map((currentValue) => {
    //         let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //         return newText;
    //     });
    //     setText(newText.join(" "));
    // }

    const handleOnChange = (event) => {
        // console.log("Onchange handel");
        setText(event.target.value);
    }

    const handleclearClick = (event) => {
        let newText = "";
        setText(newText);

    }

    const handleCopy=()=>{
        var txt=document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value)
    }

    const handleExtraSpace=()=>{
        // redix
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter Your Text');

    return (
        <>
            <div className="container">
                <div className="my-3">
                    <div className="mb-3">
                        <h2>{props.heading}</h2>
                        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="6"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={handledownClick}>Convert to Lowercase</button>
                    {/* <button className="btn btn-primary mx-3" onClick={intoTitleCase}>Title Case</button> */}
                    <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear </button>
                    <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text </button>
                    <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Handle Extra Space </button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Text summary</h1>
                <p>your text have <b>{text.split(" ").length}</b> WORD and <b>{text.length}</b> CHARACTER
                    and <b>{text.split(".").length - 1}</b> SENTENCE and <b>{text.split("\n").length - 1}</b> PARAGRAPH. </p>
                <p>You take {0.008 * text.split(" ").length} minute to read this text</p>

            </div>
        </>
    )
}
