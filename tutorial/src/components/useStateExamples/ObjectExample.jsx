import React, { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({
    name: "Victory",
    age: 23,
    programmingLanguages: ["Python", "JavaScript", "Java"],
  });
  const increaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <div className="list">
        {person.programmingLanguages.map((language) => (
          <p>{language}</p>
        ))}
      </div>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
};

export default Person;
