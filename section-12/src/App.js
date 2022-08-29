import React, { useState, useCallback } from 'react';

import './App.css';
import Demo from './components/ParaGraph/Demo';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [])

  console.log("App")

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false}/>
      <Button onClick={toggleParagraphHandler} >Show Paragraph</Button>
    </div>
  );
}

export default App;
