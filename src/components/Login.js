import { useState } from 'react';
import logo from '../logo.svg';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="center">
      <h2>Employee Polls</h2>
      <img className="login-image" src={logo} alt="login-img" />
      <h3>Login</h3>
      <form className="new-poll" onSubmit={handleSubmit}>
        <label>User</label>
        <input 
          id="user" name="user" value={user}
          onChange={event => setUser(event.target.value)}
          required
        />
        <label>Password</label>
        <input
          id="password" name="password" type="password" value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
