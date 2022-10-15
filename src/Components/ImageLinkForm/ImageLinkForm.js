import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit, sendBytes}) => {
    return(
        <div>
            <h1 className = "top_words">Classyficiation</h1>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type = "text" onChange={onInputChange}/>
                    <button onClick = {onButtonSubmit} className="w-30 f4 grow link ph3 pv2 dib white bg-light-green">Detect</button>
                    <input type="file" className="custom-file-input" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange = {event => sendBytes(event)}></input>
                </div>
            </div>

        </div>
    );
}

export default ImageLinkForm