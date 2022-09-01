import { useState } from 'react';
import { connect } from "react-redux";

import logo from '../logo.svg';
import { loginUser } from '../actions';
import { ROUTES } from '../utils/constants';
import withRouter from "../utils/withRouter";

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
          if (window.location.search) {
            const newUrl = window.location.search.split('=')[1];
            props.router.navigate(newUrl);
          }
          else {
            props.router.navigate(ROUTES.HOME);
          }
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
          id="user" data-testid="user" name="user" value={user}
          onChange={event => setUser(event.target.value)}
          required
        />
        <label>Password</label>
        <input
          id="password" data-testid="password" name="password" type="password" value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <button className="btn" type="submit" data-testid="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default withRouter(connect(mapStateToProps)(Login));
