import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from '../constants';
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import PollPage from './PollPage';
import CreatePoll from './CreatePoll';


function App(props) {
  const isLoggedIn = props.user?.id;
  console.warn(props);

  if (!isLoggedIn && props.history.location.pathname !== ROUTES.LOGIN) {
    props.history.push(ROUTES.LOGIN);
    return <div className="container">
      <Login/>
    </div>
  }

  return (
    <div className="container">
      {isLoggedIn && <Nav />}
        <Routes>
          <Route path={ROUTES.HOME} exact element={<Dashboard />} />
          <Route path={ROUTES.LOGIN} exact element={<Login />} />
          <Route path={ROUTES.POLL} element={<PollPage />} />
          <Route path={ROUTES.CREATE} exact element={<CreatePoll />} />
        </Routes>
      </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser,
});

App.defaultProps = {
}

// App.propTypes = {

// }

export default connect(mapStateToProps)(App);
