import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      console.log("Hi");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}></a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;
