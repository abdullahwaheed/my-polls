import { Link } from "react-router-dom";
import { formatDate } from "../utils";

const Poll = (props) => {
  const { id, author, timestamp } = props.poll;

  return (
    <Link to={`/poll/${id}`} className="poll">
      <div className="poll-info">
        <div>
          <span>{author}</span>
          <div>{formatDate(timestamp)}</div>
        </div>
        <div className="poll-icons">
          <button className="btn">
            Show
          </button>
        </div>
      </div>
    </Link>
  );
};

// const mapStateToProps = ({ authedUser, users, polls }, { id }) => {
//   const poll = polls[id];
//   return {
//     authedUser,
//     poll: poll
//   };
// };

// export default connect(mapStateToProps)(Poll);
export default Poll;
