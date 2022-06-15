import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayContentItem from "./DisplayContentItem";
import { getRecipeAsync } from "../reducers/recipe/thunks";

function DisplayContent() {
  const list = useSelector((state) => state.recipe.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeAsync());
  }, []);
  // console.log(list);
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <DisplayContentItem
            key={index}
            index={index}
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
