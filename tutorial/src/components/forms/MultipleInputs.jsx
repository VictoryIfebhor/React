import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (person.name && person.age && person.email) {
      const newPerson = { ...person, key: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    } else {
      alert("Please provide input for all fields");
    }
    console.log("Form submitted");
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={person.name}
              onChange={(e) => inputChangeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={person.email}
              onChange={(e) => inputChangeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={(e) => inputChangeHandler(e)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map(({ key, name, email }) => {
          return (
            <div key={key} className="item">
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
