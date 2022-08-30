import { connect } from "react-redux";

import { formatPolls } from "../utils";
import Poll from './Poll';

const Dashboard = (props) => {
  const { id: userId } = props.user;

  const renderPolls = polls => (
    <ul className="dashboard-list">
        {polls.map(poll => (
          <li key={poll.id}>
            <Poll poll={poll} />
          </li>
        ))}
    </ul>
  );

  const filterPolls = (answered = true) => (
    props.polls.filter(poll => {
        if (answered){
          return poll.votes.includes(userId);
        }
        return !poll.votes.includes(userId)
    })
  );

  return (
    <div className="center">
      <h2>New Questions</h2>
      {renderPolls(filterPolls())}
      <h2>Done</h2>
      {renderPolls(filterPolls(false))}
    </div>
  );
};

const mapStateToProps = ({ polls, authedUser }) => ({
  polls: formatPolls(polls),
  user: authedUser
});

export default connect(mapStateToProps)(Dashboard);

