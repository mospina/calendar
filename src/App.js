import React from 'react';
import './App.css';

function DateTime() {
  const today = new Date();
  
  return (
    <h3>{today.toString()}</h3>
  )
}

function App() {
  return (
    <div className="App">
      <h2>Calendar</h2>
      <DateTime />
    </div>
  );
}

export default App;
