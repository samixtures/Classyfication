import React from "react";
import './FaceRecognition.css';

function displayListItems(list) {
    // const reptiles = ["alligator", "snake", "lizard"];
  
    // return reptiles.map((reptile) => <li key = {reptile}>{reptile}</li>);
    return list.map((reptile) => <li key = {reptile}>{reptile}</li>);
  }

const FaceRecognition = ({imageUrl, category_names, category_percents}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img src = {imageUrl} width='500px' height='auto'/>
                <div className = "center">
                    <ul className = "list bot_words">
                        <li><h1>CATEGORIES</h1></li>
                        {displayListItems(category_names)}
                    </ul>
                    <ul className = "list bot_words">
                        <li><h1>ACCURACY</h1></li>
                        {displayListItems(category_percents)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;