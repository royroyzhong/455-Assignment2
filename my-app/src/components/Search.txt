import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../action";

function Search() {
  const dispatch = useDispatch();
  const handlerSearch = (event) => {
    const value = event.target.value;
    dispatch(search(value));
  };
  return (
    <>
      <input type="text" placeholder="Search" onChange={handlerSearch} />
    </>
  );
}

export default Search;
