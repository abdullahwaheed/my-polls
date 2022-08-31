import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTES } from "../utils";
import { handleSavePollResponse } from "../actions";
import withRouter from "../utils/withRouter";

const PollPage = (props) => {
  const { author, poll, authedUser } = props;
  if (!props.poll) {
    return (
      <div className="center">
        <p>This Poll doesn't exist</p>
        <p>Go back to <Link to={ROUTES} className="poll">Dashboard</Link>.</p>
      </div>
    );
  };

  const saveAnswer = optionName => {
    props.dispatch(handleSavePollResponse({
      authedUser: authedUser.id,
      qid: poll.id,
      answer: optionName,
    }));
  };

  let disabled = false;
  if ([...poll.optionOne.votes, ...poll.optionTwo.votes].includes(authedUser.id)) {
    disabled = true;
  }

  const renderItem = optionName => {
    const option = poll[optionName];

    let btnSelectClass = '';
    if (option.votes.includes(authedUser.id)) {
      btnSelectClass = 'btn-selected';
    }
    return (
      <div className="item">
        <span className="poll-name">{option.text}</span>
          <button className={['btn', btnSelectClass].join(' ')} onClick={() => saveAnswer(optionName)} disabled={disabled}>
            Click
          </button>
      </div>
    )
  }

  return (
    <div className="center">
      <h2>Poll by {author.id}</h2>
      <img className="login-image" src={author.avatarURL} alt="author-avatar" />
      <h3>Would You Rather</h3>
      <div className="row">
        {renderItem('optionOne')}
        {renderItem('optionTwo')}
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
