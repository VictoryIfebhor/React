import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://course-api.com/axios-tutorial-post";

const PostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    try {
      const { data } = await axios.post(url, { name, email });
      setIsSuccess(true);
      setErrorMessage("");
      setSuccessMessage(data.msg);
      console.log(data);
    } catch (error) {
      console.log(error.response);
      const { data } = error.response;
      setIsError(true);
      setErrorMessage(data?.msg || "Connection error. Try again later");
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    console.log("Abi you dey whine me?");
    const timeout = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
      setIsSuccess(false);
      setIsError(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isError, isSuccess]);

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="alert-container">
          <p
            className={`text-center ${
              isError
                ? "alert alert-danger"
                : isSuccess
                ? "alert alert-success"
                : ""
            }`}
          >
            {isError ? errorMessage : isSuccess ? successMessage : ""}
          </p>
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-block">login</button>
      </form>
    </section>
  );
};

export default PostRequest;
