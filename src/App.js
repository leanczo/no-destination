import React, { useState } from "react";
import './App.css';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Button from './components/Button/Button';

function App() {
  const [textToDelete, setTextToDelete] = useState("This is a card");
  const [hasToDestroy, setHasToDestroy] = useState(false);

  const handleClickButton = (event) => {
    setHasToDestroy(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card text={textToDelete} hasToDestroy={hasToDestroy}/>
        <Input onChange={(text) => setTextToDelete(text)} />
        <Button onClick={(e) => handleClickButton(e)} />
      </header>
    </div>
  );
}

export default App;
