import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import CreatePoll from "./CreatePoll";
import { getUsers } from "../utils";

const mockStore = configureStore();

describe("CreatePoll", () => {
  it("test success behavior.", async () => {
    const users = await getUsers();
    const store = mockStore({
      authedUser: users.zoshikanlu,
    });
    store.dispatch = jest.fn();
    render(
      <MemoryRouter>
        <Provider store={store}>
        <CreatePoll />
        </Provider>
      </MemoryRouter>
    );

    const firstOption = screen.getByTestId("firstOption");
    fireEvent.change(firstOption, { target: { value: "Drink Coffee" } });
    
    const secondOption = screen.getByTestId("secondOption");
    fireEvent.change(secondOption, { target: { value: "Drink Tea" } });
    
    expect(store.dispatch).toHaveBeenCalledTimes(0);
    const submitButton = screen.getByTestId("submitBtn");
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
