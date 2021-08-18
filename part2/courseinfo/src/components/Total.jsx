const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((s, p) => s + p);
  return (
    <div>
      <h3>total of {total} exercises</h3>
    </div>
  );
};

export default Total;
