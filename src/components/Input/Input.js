import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ hasToDestroy, resetDestroy, onEnterPress }) => {
  const [text, setText] = useState("");
  const [letters, setLetters] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);


  useEffect(() => {
    if (hasToDestroy) {
      setIsDisabled(true);
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
        setIsDisabled(false);
      }, 3000);
    }
  }, [hasToDestroy, resetDestroy, text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    onEnterPress(e);
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
        placeholder="Write your thoughts..."
        className="input"
        onChange={handleChange}
        value={text}
        maxLength={1000}
        disabled={isDisabled}
        onKeyDown={handleKeyDown}
      />
      <div className="character-count">{text.length}/1000</div>

    </div>
  );
};

export default Input;
