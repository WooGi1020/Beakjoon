import React from "react";
import HandIcon from "./HandIcon";
import backgroundImg from "../assets/purple.svg";
import "./HandleButton.css";

function HandButton({ value, onClick, className }) {
  const handleClick = () => onClick(value);
  return (
    <div>
      <button className="HandButton" onClick={handleClick}>
        <HandIcon className="HandButton-icon" value={value} />
      </button>
    </div>
  );
}

export default HandButton;
