import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import Leaderboard from "./Leaderboard";
import { getUsers, getQuestions } from "../utils";

const mockStore = configureStore();


describe('Leaderboard', () => {

  it("test leaderboard data.", async () => {
    const users = await getUsers();
    const polls = await getQuestions();
    const store = mockStore({
      users,
      polls,
    });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
    
    Object.values(users).forEach(user => {
      expect(screen.getByText(user.id)).toBeInTheDocument();
      expect(screen.getByTestId(`${user.id}-answered`)).toHaveTextContent(Object.keys(user.answers).length);
      expect(screen.getByTestId(`${user.id}-created`)).toHaveTextContent(user.questions.length);
    })

    // global.alert = jest.fn();

    // const user = view.getByTestId("user");
    // fireEvent.change(user, { target: { value: "test" } });
    
    // const password = view.getByTestId("password");
    // fireEvent.change(password, { target: { value: "123" } });
    
    // const submitButton = view.getByTestId("submitBtn");
    // fireEvent.click(submitButton);
    // expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
