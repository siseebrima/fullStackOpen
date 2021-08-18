import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  //   console.log(parts[1]);
  return (
    <div>
      {parts.map((p) => {
        return (
          <div key={p.id}>
            <Part part={p.name} exercise={p.exercises} />
          </div>
        );
      })}
      <Total parts={parts} />
    </div>
  );
};

export default Content;
