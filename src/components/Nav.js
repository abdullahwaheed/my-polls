import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ROUTES } from "../utils";
import { logoutUser } from "../actions";
import withRouter from "../utils/withRouter";

const Nav = (props) => {

  const handleLogout = () => {
    props.dispatch(logoutUser());
    props.router.navigate(ROUTES.LOGIN);
  }

  const {user} = props;

  return (
    <div className="header">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.LEADERBOARD}>Leaderboard</Link>
      <Link to={ROUTES.CREATE}>Create New</Link>
      <div className="header-right">
        <span>
          <img src={user.avatarURL} alt="user-img" className="header-img"/>
        </span>
        <span>{user.name}</span>
        <a href="#!" onClick={handleLogout}>Logout</a>
      </div>
    </div>

  );
};

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser,
});

export default withRouter(connect(mapStateToProps)(Nav));
