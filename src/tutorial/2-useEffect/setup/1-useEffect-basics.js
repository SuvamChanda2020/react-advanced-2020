import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    console.log("call useeffect");
    if (value > 5) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("HelloWorld");
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
        className="btn"
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
