import React, { useState } from 'react';
import { loginUser } from '../../api/api'; 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log(response); // handle success
    } catch (error) {
      console.error(error); // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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
    <button type="submit" className="btn btn-primary submit-button">Login</button>
  </form>
  );
}

export default LoginForm;
