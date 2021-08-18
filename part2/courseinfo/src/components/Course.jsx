import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <div>
      {/* <Header course={courses.name} /> */}
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
