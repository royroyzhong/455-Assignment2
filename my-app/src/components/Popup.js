import React from "react";

function Popup(param) {
  return (
    <div className="popUp">
      <div className="popUpContent">
        <span onClick={param.handleClick}>Close</span>
        {param.content}
      </div>
    </div>
  );
}

export default Popup;
