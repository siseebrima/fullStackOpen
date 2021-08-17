import React, { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app works by clicking the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeft = () => {
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRight = () => {
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeft} text="left" />
      <Button handleClick={handleRight} text="right" />

      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
