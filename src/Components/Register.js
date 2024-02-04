import React, { useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [response, setResponse] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: אימות נתונים ושליחת בקשה לשרת (הרשמה/כניסה)
    if (isLogin) {
      setResponse(Login(formData.email, formData.password));
    } else {
      setResponse(Signup(formData.email, formData.password));
    }

    if (response.status !== 200) {
      setIsLogin(false);
    }
    if (isLogin) {
      localStorage.setItem('userData', JSON.stringify(response));
      navigate('/home');
    } else {
      alert("email or password incorrect, please try again or signup if you don't have an account");
      
    }
  };

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          name='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <p onClick={handleSwitch}><u>
        {isLogin ? 'Not registered yet? Sign up' : 'Already registered? Login'}
      </u></p>
    </div>
  );
}

export default Register;
