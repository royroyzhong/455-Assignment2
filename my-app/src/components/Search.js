import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchRecipeAsync } from "../reducers/recipe/thunks";
import { useState } from "react";
function Search() {
  const [inputs, setInputs] = useState("");
  const dispatch = useDispatch();
  const handlerSearch = (event) => {
    const value = event.target.value;
    dispatch(searchRecipeAsync(value));
  };
  return (
    <>
      <input type="text" placeholder="Search" onChange={handlerSearch} />
    </>
  );
}

export default Search;
