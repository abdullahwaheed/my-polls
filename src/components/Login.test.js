import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import Login from "./Login";
import { getUsers } from "../utils";

const mockStore = configureStore();


describe('Login', () => {
  it("test elements in the form.", () => {
    render(
      <MemoryRouter>
        <Provider store={mockStore({})}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("user")).toBeInTheDocument(true);
    expect(screen.getByTestId("password")).toBeInTheDocument(true);
    expect(screen.getByTestId("submitBtn")).toBeInTheDocument(true);;
  });

  it("test wrong crendetials error behavior.", async () => {
    const users = await getUsers();
    const store = mockStore({
      users,
    });
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    global.alert = jest.fn();

    const user = screen.getByTestId("user");
    fireEvent.change(user, { target: { value: "test" } });
    
    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "123" } });
    
    const submitButton = screen.getByTestId("submitBtn");
    fireEvent.click(submitButton);
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
