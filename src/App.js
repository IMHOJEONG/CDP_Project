import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <CardContainer></CardContainer>
    </div>
  );
}

export default App;
