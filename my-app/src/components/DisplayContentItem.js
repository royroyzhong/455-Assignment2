import React from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import Popup from "./Popup";

function DisplayContentItem(props) {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(props);
  const handlePopup = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <li>
        <div className="recipeDetail">
          <div onClick={handlePopup}>
            <p>Name: {props.name}</p>
            <p>Ingredients: {props.ingredients}</p>
          </div>

          <Buttons
            name="delete"
            recipeName={props.name}
            recipeIngredients={props.ingredients}
            recipeInstructions={props.instructions}
            index={props.index}
            showName="Delete"
            actionType="remove"
          />
        </div>
      </li>

      {isVisible && (
        <Popup
          content={
            <>
              <li>
                <div>
                  <p>Instructions: {props.instructions}</p>
                </div>
              </li>
            </>
          }
          handleClick={handlePopup}
        />
      )}
    </>
  );
}

export default DisplayContentItem;
