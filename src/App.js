import React from 'react';

import './App.css';

import Button from "@material-ui/core/Button"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={() => alert("Hello World!")}>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
