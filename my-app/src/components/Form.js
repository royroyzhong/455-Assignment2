import React from "react";
import Buttons from "./Buttons";
import FormItem from "./FormItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../reducers/users/reducer";
// import Search from "./Search";

function Form() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(inputs));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleReset = (event) => setInputs({});
  return (
    <div className="forms">
      <form id="myForm" onSubmit={handleSubmit}>
        <FormItem
          name="Name"
          value={inputs.Name || ""}
          handler={handleChange}
        />
        <FormItem
          name="Ingredients"
          value={inputs.Ingredients || ""}
          handler={handleChange}
        />
        <FormItem
          name="Instructions"
          value={inputs.Instructions || ""}
          handler={handleChange}
        />
        <input type="submit" id="addBtn" />
        <button name="clearForm" onClick={handleReset}>
          Reset
        </button>

      </form>
      <br />
      {/* <Search /> */}
    </div>
  );
}

export default Form;
