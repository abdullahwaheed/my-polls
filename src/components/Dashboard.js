import { connect } from "react-redux";

import { formatPolls } from "../utils";
import Poll from './Poll';

const Dashboard = (props) => {
  const { id: userId } = props.user;

  const renderPolls = polls => (
    <div className="dashboard-list">
        {polls.map(poll => (
          <Poll poll={poll} key={poll.id}/>
        ))}
    </div>
  );

  const answered = [];
  const notAnswered = [];

  props.polls.forEach(poll => {
    if (poll.votes.includes(userId)){
      answered.push(poll)
    }
    else{
      notAnswered.push(poll);
    }
  });

  return (
    <div className="center">
      <h2>New Questions</h2>
      {renderPolls(notAnswered)}
      <h2>Done</h2>
      {renderPolls(answered)}
    </div>
  );
};

const mapStateToProps = ({ polls, authedUser }) => ({
  polls: formatPolls(polls),
  user: authedUser,
});

export default connect(mapStateToProps)(Dashboard);

