import React from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
