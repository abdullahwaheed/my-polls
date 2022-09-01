import { useState } from 'react';
import { connect } from "react-redux";

import withRouter from "../utils/withRouter";
import { ROUTES } from "../utils";
import { handleCreatePoll } from "../actions";

const CreatePoll = (props) => {
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');

  const resetForm = () => {
    setFirstOption('')
    setSecondOption('');
  }

  const checkLogin = (event) => {
    event.preventDefault();
    props.dispatch(handleCreatePoll({
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: props.user.id,
    }));
    props.router.navigate(ROUTES.HOME);
    resetForm();
}

  return (
    <div className="center">
      <h2>Would You Rather</h2>
      <h3>Create Your Own Poll</h3>
      <form className="new-poll" onSubmit={checkLogin}>
        <label>First Option</label>
        <input 
          id="firstOption" name="firstOption" value={firstOption}
          data-testid="firstOption"
          onChange={event => setFirstOption(event.target.value)}
          required
        />
        <label>Second Option</label>
        <input
          id="secondOption" name="secondOption" value={secondOption}
          data-testid="secondOption"
          onChange={event => setSecondOption(event.target.value)}
          required
        />
        <button className="btn" type="submit" data-testid="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser,
});

export default withRouter(connect(mapStateToProps)(CreatePoll));
