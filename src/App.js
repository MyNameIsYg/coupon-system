import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path='/home' element={<HomePage />} />
          {/* Define routes for other pages */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
