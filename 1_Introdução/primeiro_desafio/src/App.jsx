/* App.jsx */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <h1>Realizando Desafio 1</h1>
      <h2>Conforme solicitado, foram adicionados elementos HTML</h2>
      <div className="button-container">
        <button onClick={incrementCount}>Incrementar</button>
        <button onClick={decrementCount}>Decrementar</button>
      </div>
      <p>Contador: {count}</p>
    </div>
  );
}

export default App;
