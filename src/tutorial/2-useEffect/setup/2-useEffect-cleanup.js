import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use Effect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} pixal</h2>
    </>
  );
};

export default UseEffectCleanup;
