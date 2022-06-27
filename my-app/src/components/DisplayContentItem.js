import React from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import Popup from "./Popup";

function DisplayContentItem(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  // console.log(props);
  const handlePopup = () => {
    setIsVisible(!isVisible);
  };

  // console.log(typeof props.lastModified);
  return (
    <>
      <li>
        <div className="recipeDetail">
          <div onClick={handlePopup}>
            <p>Name: {props.name}</p>
            <p>Ingredients: {props.ingredients}</p>
            <p>Last Modified Since: {props.lastModified}</p>
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

          <input type="text" onChange={(e) => setText(e.target.value)} />
          <Buttons
            name="edit"
            recipeName={props.name}
            content={text}
            showName="Edit Name"
            actionType="edit"
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
