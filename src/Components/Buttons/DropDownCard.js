import React from "react";

const DropDownCard = ({ data = [] }) => (
  <div className="dropdown-content">
    <ul className="">
      {data.map((item, i) => (
        <li key={i} className="">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default DropDownCard;
