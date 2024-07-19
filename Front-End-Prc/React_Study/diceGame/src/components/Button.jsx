import React from "react";
import "./Button.css";

function Button({ children, onClick, color = "blue", className = "" }) {
  const classNames = `Button ${color} ${className}`;
  return (
    <div>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
