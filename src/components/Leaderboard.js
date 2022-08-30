import { connect } from "react-redux";


const Leaderboard = ({ users }) => {
  return (
    <div className="center">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td className="table-profile">
              <img src={user.avatarURL} alt="user-img" className="user-img"/>
              <div className="profile-info">
                <span className="name-title">{user.name}</span>
                <span>{user.id}</span>
              </div>
            </td>
            <td>{user.answered}</td>
            <td>{user.created}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const userData = Object.values(users).map(user => ({
    id: user.id,
    name: user.name,
    avatarURL: user.avatarURL,
    answered: Object.keys(user.answers).length,
    created: user.questions.length,
  }))
  return { users: userData }
};

export default connect(mapStateToProps)(Leaderboard);
