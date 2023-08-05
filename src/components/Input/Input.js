import React, { useState } from "react";
import "./Input.css";

const Input = ({ handleInput }) => {
  const handleChange = (e) => {
    setTimeout(() => {
      handleInput(e.target.value);
    }, 500);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Write something here"
        className="input"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default Input;
