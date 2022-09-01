import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import CreatePoll from "./CreatePoll";
import { getUsers } from "../utils";

const mockStore = configureStore();

describe("NameForm", () => {

  it("test success behavior.", async () => {
    const users = await getUsers();
    const store = mockStore({
      authedUser: users.zoshikanlu,
    });
    store.dispatch = jest.fn();
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
        <CreatePoll />
        </Provider>
      </MemoryRouter>
    );

    const firstOption = view.getByTestId("firstOption");
    fireEvent.change(firstOption, { target: { value: "Drink Coffee" } });
    
    const secondOption = view.getByTestId("secondOption");
    fireEvent.change(secondOption, { target: { value: "Drink Tea" } });
    
    expect(store.dispatch).toHaveBeenCalledTimes(0);
    const submitButton = view.getByTestId("submitBtn");
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
