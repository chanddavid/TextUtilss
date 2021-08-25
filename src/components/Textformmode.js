
import React, { useState } from 'react'

export default function Textformmode(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + setText);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase','success')

    }
    const handledownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Uppercase','success')

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
        props.showAlert('All text Cleared','success')


    }

    const handleCopy = () => {
        var txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value)
        props.showAlert('Copied','success')

    }

    const handleExtraSpace = () => {
        // redix
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('All extra spaces managed','success')

    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="my-3">
                    <div className="mb-3">
                        <h2>{props.heading}</h2>
                        <textarea value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" id="myBox" rows="6"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={handledownClick}>Convert to Lowercase</button>
                    {/* <button className="btn btn-primary mx-3" onClick={intoTitleCase}>Title Case</button> */}
                    <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear </button>
                    <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text </button>
                    <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Handle Extra Space </button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text summary</h2>
                <p>your text have <b>{text.split(" ").length}</b> WORD and <b>{text.length}</b> CHARACTER
                    and <b>{text.split(".").length - 1}</b> SENTENCE and <b>{text.split("\n").length - 1}</b> PARAGRAPH. </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : '->Enter something to preview'}</p>

            </div>
        </>
    )
}
