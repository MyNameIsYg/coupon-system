import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Menu from './Components/Menu';
import Store from './Components/Store';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <HomePage {...{ user: { name: "yael" } }} />
          <Store />
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path='/home' element={<HomePage {...{ user: localStorage.getItem('userData') }} onLogout={() => { localStorage.removeItem('user') }} />} />
            <Route exact path='/store' element={<Store />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            {/* Define routes for other pages */}
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
