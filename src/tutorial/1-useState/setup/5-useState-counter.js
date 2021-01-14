import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increseBy100 = () => {
    setValue(value + 100);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2> regular counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increse
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrese
        </button>
        <button className="btn" onClick={increseBy100}>
          Increse 100
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
