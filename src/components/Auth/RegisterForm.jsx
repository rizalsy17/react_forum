import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../Actions/AuthAction';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(name, email, password));
    } catch (error) {
      setError(error.message); // Tampilkan pesan kesalahan
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 style={{ textAlign: 'center' }}>Daftar Akun Baru</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="form-control input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-control input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-control input-field"
        />
      </div>
      <button type="submit" className="btn btn-primary submit-button">Register</button>
      <p>Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
    </form>
  );
}

export default RegisterForm;
