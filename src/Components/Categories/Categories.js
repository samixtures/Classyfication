import React from "react";
function displayListItems(list) {
    // const reptiles = ["alligator", "snake", "lizard"];
  
    // return reptiles.map((reptile) => <li key = {reptile}>{reptile}</li>);
    return list.map((reptile) => <li key = {reptile}>{reptile}</li>);
  }
const Categories = ({ category_names }) => {
    return(
        <div>
            {/* {displayListItems(category_names)} */}
        </div>
    )
}

export default Categories;