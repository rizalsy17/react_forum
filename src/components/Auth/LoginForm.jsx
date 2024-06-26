// login form
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Actions/AuthAction';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email); 
      console.log("Password:", password); 
      const response = await dispatch(login(email, password)); 
      console.log("Response from server:", response); 

      if (response && response.data && response.data.token) { 
        navigate('/');
      } else {
        setError('Email atau password salah');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat melakukan login. Mohon coba lagi.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 style={{ textAlign: 'center' }}>Masuk Akun</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-control input-field"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-control input-field"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary submit-button">Login</button>
      <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
    </form>
  );
}

export default LoginForm;
