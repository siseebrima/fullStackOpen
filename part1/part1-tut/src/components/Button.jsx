import React from "react";

const Button = ({ increase, add, defaultValue, zero, decrease, minus }) => {
  return (
    <div>
      <button onClick={increase}>{add}</button>
      <button onClick={defaultValue}>{zero}</button>
      <button onClick={decrease}>{minus}</button>
    </div>
  );
};

export default Button;
