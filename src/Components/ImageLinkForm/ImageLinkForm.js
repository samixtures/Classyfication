import React from "react";
import './ImageLinkForm.css'

function loadFile(event) {
    console.log(URL.createObjectURL(event.target.files[0]));
    function blobToDataURL(blob, callback) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {callback(e.target.result);}
        fileReader.readAsDataURL(blob);
      }
    blobToDataURL(event.target.files[0], function(dataurl) {
        console.log(dataurl);
    });
}

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <h1 className = "top_words">Classyficiation</h1>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type = "text" onChange={onInputChange}/>
                    <button onClick = {onButtonSubmit} className="w-30 f4 grow link ph3 pv2 dib white bg-light-green">Detect</button>
                    <input type="file" className="custom-file-input" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange = {event => loadFile(event)}></input>
                </div>
            </div>

        </div>
    );
}

export default ImageLinkForm