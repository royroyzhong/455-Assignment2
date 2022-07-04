import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayContentItem from "./DisplayContentItem";
import { getRecipeAsync } from "../reducers/recipe/thunks";

function DisplayContent() {
  const list = useSelector((state) => state.recipe.list);

  const dispatch = useDispatch();
  const [update, setUpdate] = React.useState("false");
  useEffect(() => {
    dispatch(getRecipeAsync());
  }, [list]);
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
            lastModified={item.lastModifieddate}
            like={item.like}
            fn={setUpdate}
          />
        ))}
      </ul>
    </>
  );
}

export default DisplayContent;
