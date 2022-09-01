import { connect } from "react-redux";

import { ROUTES } from "../utils";
import { handleSavePollResponse } from "../actions";
import withRouter from "../utils/withRouter";

const PollPage = (props) => {
  const { author, poll, authedUser } = props;
  if (!props.poll) {
    return (
      <div className="center">
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <div></div>
              <h1>404</h1>
            </div>
            <h2>Poll not found</h2>
            <a href="#!" onClick={props.router.navigate(ROUTES.HOME)}>home page</a>
          </div>
        </div>
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
  const totalVotes = [...poll.optionOne.votes, ...poll.optionTwo.votes];
  if (totalVotes.includes(authedUser.id)) {
    disabled = true;
  }

  const renderItem = optionName => {
    const option = poll[optionName];

    let btnSelectClass = '';
    if (option.votes.includes(authedUser.id)) {
      btnSelectClass = 'btn-selected';
    }
    const votesCount = option.votes.length;
    const totalVotesCount = totalVotes.length;
    return (
      <div className="item">
        <span className="poll-name">{option.text}</span>
        <button className={['btn', btnSelectClass].join(' ')} onClick={() => saveAnswer(optionName)} disabled={disabled}>
          Click
        </button>
        {disabled && <span className="poll-name">
          Number of people voted: {votesCount} <b>({((votesCount / totalVotesCount ) * 100).toFixed(1)}%)</b></span>
        }
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
    poll: poll || null,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
