import React, { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email) {
      setPeople((people) => {
        const person = {
          key: new Date().getTime().toString(),
          name,
          email,
        };
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      alert("Please provide name and email");
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ControlledInput;
