import React, { useEffect, useState} from "react";
import "./Input.css";

const Input = ({  hasToDestroy, resetDestroy }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value)
  };

  useEffect(() => {
    if (hasToDestroy) {
      setTimeout(() => {
        resetDestroy();
        setText("");
      }, 5000);
    }
  }, [hasToDestroy, resetDestroy]);

  return (
    <div className="input-container">
      <textarea
        placeholder="Write your frustrations here"
        className={`input ${hasToDestroy ? 'destroy' : ''}`}
        onChange={handleChange}
        value={text}
      />
    </div>
  );
};

export default Input;
