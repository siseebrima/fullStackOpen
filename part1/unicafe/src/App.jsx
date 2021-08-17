import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleAnecdotes = () => {
    const num = Math.floor(Math.random() * anecdotes.length);
    setSelected(num);

    setPoints((prev) => {
      prev[num] += 1;
      return { ...prev };
    });
  };

  // let arr = Object.values(points);
  let maxNum = Object.keys(points).reduce((a, b) =>
    points[a] > points[b] ? a : b
  );
  console.log(maxNum);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <div>{anecdotes[selected]}</div>
      <p>has {points[selected]} votes </p>
      <button onClick={handleAnecdotes}>next anecdote</button>
    </div>
  );
};

export default App;
