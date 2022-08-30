import { Link } from "react-router-dom";
import { ROUTES } from "../utils";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="left-nav">
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.LEADERBOARD}>Leaderboard</Link>
        </li>
        <li>
          <Link to={ROUTES.CREATE}>Create New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
