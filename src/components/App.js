import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from '../utils';
import { handleGetUsers, handleGetPolls } from '../actions';
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import PollPage from './PollsPage';
import CreatePoll from './CreatePoll';
import Leaderboard from './Leaderboard';
import withRouter from '../utils/withRouter';

function App(props) {
  useEffect(() => {
    props.dispatch(handleGetUsers());
    props.dispatch(handleGetPolls());
  }, []);

  const isLoggedIn = props.user?.id;

  if (!isLoggedIn && props.router.location.pathname !== ROUTES.LOGIN) {
    props.router.navigate(ROUTES.LOGIN);
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
          <Route path={ROUTES.LEADERBOARD} exact element={<Leaderboard />} />
        </Routes>
      </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser,
});

export default withRouter(connect(mapStateToProps)(App));
