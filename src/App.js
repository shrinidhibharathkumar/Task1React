import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="wordcounter">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p >   Word count: {wordCount}</p>
    </div>
  );
}

export default App;