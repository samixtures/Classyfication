import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <h1 className = "top_words">Classyficiation</h1>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type = "text" onChange={onInputChange}/>
                    <button onClick = {onButtonSubmit} className="w-30 f4 grow link ph3 pv2 dib white bg-light-green">Detect</button>
                </div>
            </div>

        </div>
    );
}

export default ImageLinkForm