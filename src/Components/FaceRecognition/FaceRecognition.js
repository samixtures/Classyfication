import React from "react";

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
                <div>
                    {displayListItems(category_names)}
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;