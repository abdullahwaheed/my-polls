import { useState } from 'react';
import { connect } from "react-redux";

import logo from '../logo.svg';
import { loginUser } from '../actions';
import { ROUTES } from '../utils/constants';
import browserHistory from '../history';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setUser('')
    setPassword('');
  }

  const checkLogin = (event) => {
    event.preventDefault();
    const testUser = props.users[user];
    if (testUser) {
        if (testUser.password === password) {
          props.dispatch(loginUser(testUser))
          resetForm();
          browserHistory.push(ROUTES.HOME);
          return;
        }
        else {
          alert('Incorrect Password');
          setPassword('');
          return;
        }
    }
    alert('Incorrect Username or Password');
    resetForm();
}

  return (
    <div className="center">
      <h2>Employee Polls</h2>
      <img className="login-image" src={logo} alt="login-img" />
      <h3>Login</h3>
      <form className="new-poll" onSubmit={checkLogin}>
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

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
