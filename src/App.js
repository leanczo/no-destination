import React, { useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "./App.css"

function App() {
  const [hasToDestroy, setHasToDestroy] = useState(false);

  const handleClickButton = (event) => {
    setHasToDestroy(true);
  };

  const resetDestroy = () => {
    setHasToDestroy(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          hasToDestroy={hasToDestroy}
          resetDestroy={resetDestroy}
        />
        <Button onClick={(e) => handleClickButton(e)} />
      </header>
    </div>
  );
}

export default App;
