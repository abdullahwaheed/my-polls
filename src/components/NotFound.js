import { ROUTES } from "../utils/constants";
import withRouter from "../utils/withRouter";

const NotFound = (props) => {
  return (
    <div className="center">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <div></div>
            <h1>404</h1>
          </div>
          <h2>Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="#!" onClick={props.router.navigate(ROUTES.HOME)}>home page</a>
        </div>
      </div>
    </div>
  );
};


export default withRouter(NotFound);
