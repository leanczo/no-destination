import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ hasToDestroy, resetDestroy }) => {
  const [letters, setLetters] = useState([""]);
  const [text, setText] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setLetters(value.split(""));
    setText(value);
  };

  useEffect(() => {
    if (hasToDestroy) {
      setText("");
      setTimeout(() => {
        resetDestroy();
        setLetters([]);
      }, 500 * letters.length);
    }
  }, [hasToDestroy, resetDestroy, letters.length]);

  return (
    <div className="input-container">
      <div className={`letters-container ${hasToDestroy ? "animate" : ""}`}>
        {letters.map((letter, index) => (
          <span
            className="letter"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <input
        placeholder="Write your frustrations here"
        className="input"
        onChange={handleChange}
        value={text}
      />
    </div>
  );
};

export default Input;
