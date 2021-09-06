import React from "react";

const Contacts = ({ filtered, persons, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filtered.length < 1
        ? persons.map((p) => {
            return (
              <p key={p.name}>
                {p.name} {p.number}
                <button onClick={() => handleDelete(p.id)}>delete</button>
              </p>
            );
          })
        : filtered.map((p) => {
            return (
              <p key={p.name}>
                {p.name} {p.number}
                <button onClick={() => handleDelete(p.id)}>delete</button>
              </p>
            );
          })}
    </div>
  );
};

export default Contacts;
