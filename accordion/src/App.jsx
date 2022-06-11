import React, { useState } from "react";

import data from "./data";
import Question from "./components/Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [active, setActive] = useState(null);

  const clickHandler = (id) => {
    // if active tab is clicked, then close it
    const value = active === id ? null : id;
    setActive(value);
  };

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
                clickHandler={clickHandler}
                active={active}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
