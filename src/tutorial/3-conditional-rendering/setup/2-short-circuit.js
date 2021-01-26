import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("k");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>Value : {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
