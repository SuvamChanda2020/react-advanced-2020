import React, { useState } from "react";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  //console.log(useState());
  //console.log(["Suvam", "Avik", "Rahul"]);
  //const value = useState("Suvam")[0];
  //const handler = useState("Suvam")[1];
  //console.log(value, handler);

  const [text, setText] = useState("Suvam Chanda");
  const handleClick = () => {
    text === "Suvam Chanda" ? setText("Bahni Sikha") : setText("Suvam Chanda");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
