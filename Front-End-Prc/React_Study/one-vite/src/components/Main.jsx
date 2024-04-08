import React, { useState } from "react";

const Main = () => {
  const obj = {
    name: "정우기",
    isValid: false,
  };

  const [name, setName] = useState("");

  const handleInfo = (e) => {
    const setname = e.target.value;
    if (e.key === "Enter") {
      setName(setname);
    }
  };

  name === obj.name ? (obj.isValid = true) : (obj.isValid = false);

  return (
    <main>
      <h1>main</h1>
      <h2>{obj.isValid ? <div>{obj.name}</div> : <div>Wrong!</div>}</h2>
      <input type="text" onKeyDown={handleInfo} />
    </main>
  );
};

export default Main;
