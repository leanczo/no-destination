import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ hasToDestroy, resetDestroy }) => {
  const [text, setText] = useState("");
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (hasToDestroy) {
      setLetters(
        text.split("").map((letter) => ({
          letter,
          x: Math.random() * window.innerWidth - window.innerWidth / 2,
          y: Math.random() * window.innerHeight - window.innerHeight / 2,
        }))
      );
      setTimeout(() => {
        resetDestroy();
        setLetters([]);
        setText("");
      }, 3000);
    }
  }, [hasToDestroy, resetDestroy, text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="letters-container">
        {hasToDestroy
          ? letters.map(({ letter, x, y }, index) => (
              <span
                key={index}
                className="letter animate"
                style={{
                  animation: `flyAndFade 3s linear forwards`,
                  "--x": `${x}px`,
                  "--y": `${y}px`,
                  whiteSpace: letter === " " ? "pre" : "normal",
                }}
              >
                {letter}
              </span>
            ))
          : text.split("").map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
              >
                {letter}
              </span>
            ))}
      </div>
      <input
        type="text"
        placeholder="Write something here"
        className="input"
        onChange={handleChange}
        value={text}
        maxLength={1000}
      />
      <div className="character-count">{text.length}/1000</div>

    </div>
  );
};

export default Input;
