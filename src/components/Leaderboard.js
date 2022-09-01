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
            <td className="table-profile" data-testid={`${user.id}-name`}>
              <img src={user.avatarURL} alt="user-img" className="user-img"/>
              <div className="profile-info">
                <span className="name-title">{user.name}</span>
                <span>{user.id}</span>
              </div>
            </td>
            <td data-testid={`${user.id}-answered`}>{user.answered}</td>
            <td data-testid={`${user.id}-created`}>{user.created}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const userData = Object.values(users).map(user => {
    const answered = Object.keys(user.answers).length;
    const created = user.questions.length;
    return {
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answered: answered,
      created: created,
      sum: answered + created
    }
  }).sort((first, second) => second.sum - first.sum)
  return { users: userData }
};

export default connect(mapStateToProps)(Leaderboard);
