import React from "react";
import { useSelector } from "react-redux";
import DisplayContentItem from "./DisplayContentItem";

function DisplayContent() {
  const list = useSelector((state) => state.recipe);

  console.log(list);
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <DisplayContentItem
            key={index}
            name={item.name}
            ingredients={item.ingredients}
            instructions={item.instructions}
          />
        ))}
      </ul>
    </>
  );
}

export default DisplayContent;
