import React from "react";

const Contacts = ({ filtered, persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filtered.length < 1
        ? persons.map((p) => {
            return (
              <p key={p.name}>
                {p.name} {p.number}
              </p>
            );
          })
        : filtered.map((p) => {
            return (
              <p key={p.name}>
                {p.name} {p.number}
              </p>
            );
          })}
    </div>
  );
};

export default Contacts;
