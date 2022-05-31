import React from "react";

function FormItem(item) {
  return (
    <>
      <label>{item.name}</label>
      <br />
      <input
        type="text"
        id={item.name}
        name={item.name}
        value={item.value}
        onChange={item.handler}
      />
      <br />
    </>
  );
}

export default FormItem;
