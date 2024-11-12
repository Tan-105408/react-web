import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Nếu bạn muốn thêm style CSS


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Giả sử API kiểm tra đăng nhập
    if (username === 'tan' && password === '12345') {
      navigate('/home');
    } else {
      navigate('/sorry');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
