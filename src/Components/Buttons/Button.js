import React from "react";

const Button = ({ content, onClick }) => (
  <button className="btn" onClick={onClick}>
    {content}
  </button>
);

export default Button;
