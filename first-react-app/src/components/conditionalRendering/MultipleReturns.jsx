import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  const getUser = async () => {
    try {
      const resp = await fetch(url);
      if (resp.status >= 200 && resp.status < 300) {
        const data = await resp.json();
        setUser(data.login);
        setIsLoading(false);
      } else {
        throw new Error("Unsuccessful call");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error encountered</h2>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <h2>{user}</h2>
      </div>
    );
  }
};

export default MultipleReturn;
