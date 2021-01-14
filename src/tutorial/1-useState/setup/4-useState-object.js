import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Suvam",
    age: 30,
    message: "random message",
  });

  const [name, setName] = useState("Suvam");
  const [age, setAge] = useState(30);
  const [message, setMessage] = useState("Random Message");

  console.log(person);
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button
        className="btn"
        onClick={() => {
          setMessage("Hello World");
        }}
      >
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
