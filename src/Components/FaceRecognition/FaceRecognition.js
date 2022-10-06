import React from "react";
import './FaceRecognition.css';

function displayListItems(list) {
    // const reptiles = ["alligator", "snake", "lizard"];
  
    // return reptiles.map((reptile) => <li key = {reptile}>{reptile}</li>);
    return list.map((reptile) => <li key = {reptile}>{reptile}</li>);
  }

const FaceRecognition = ({imageUrl, category_names}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img alt = 'clarifai image' src = {imageUrl} width='500px' height='auto'/>
                <div className = "center">
                    <ul className = "list garamond">
                        {displayListItems(category_names)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;