import React from "react";


//Button Component for testing purposes
function Btn({ type, btnColor, text }) {
  return (
    <button type={type} className={`"btn" btn-${btnColor}`}>
      {text}
    </button>
  );
}

export default Btn;