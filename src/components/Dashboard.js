import { useState } from "react";
import { connect } from "react-redux";

import { formatPolls, POLL_TYPES } from "../utils";
import Poll from './Poll';

const Dashboard = (props) => {
  const [selectedType, setSelectedType] = useState(POLL_TYPES.UNANSWERED)
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
      <select name="pool-type" id="pool-type" onChange={event => setSelectedType(event.target.value)} value={selectedType}>
        {Object.values(POLL_TYPES).map(pollType => 
          <option value={pollType} key={pollType}>{pollType}</option>
        )}
      </select>
      {selectedType === POLL_TYPES.UNANSWERED && <>
        <h2>New Questions</h2>
        {renderPolls(notAnswered)}
      </>}
      {selectedType === POLL_TYPES.ANSWERED && <>
        <h2>Done</h2>
        {renderPolls(answered)}
      </>}
    </div>
  );
};

const mapStateToProps = ({ polls, authedUser }) => ({
  polls: formatPolls(polls),
  user: authedUser,
});

export default connect(mapStateToProps)(Dashboard);

