import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils";
import withRouter from "../utils/withRouter";

const PollPage = (props) => {
  const { author, poll } = props;
  if (!props.poll) {
    return (
      <div className="center">
        <p>This Poll doesn't exist</p>
        <p>Go back to <Link to={ROUTES} className="poll">Dashboard</Link>.</p>
      </div>
    );
  };

  const renderItem = option => (
    <div className="item">
      <span className="poll-name">{option.text}</span>
        <button className="btn">
          Click
        </button>
    </div>
  )

  return (
    <div className="center">
      <h2>Poll by {author.id}</h2>
      <img className="login-image" src={author.avatarURL} alt="author-avatar" />
      <h3>Would You Rather</h3>
      <div className="row">
        {renderItem(poll.optionOne)}
        {renderItem(poll.optionTwo)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, polls }, props) => {
  const { id } = props.router.params;
  const poll = polls[id];
  const author = poll ? users[poll.author] : null;
  return {
    authedUser,
    author,
    poll: poll || null
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
