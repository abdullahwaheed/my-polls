import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import Nav from "./Nav";
import { ROUTES, getUsers } from "../utils";

const mockStore = configureStore();

describe('Login', () => {
  it("test nav elements in the form.", async () => {
    const users = await getUsers();
    render(
      <MemoryRouter>
        <Provider store={mockStore({
          authedUser: users.tylermcginnis
        })}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toHaveAttribute('href', ROUTES.HOME);
    expect(screen.getByText("Leaderboard")).toHaveAttribute('href', ROUTES.LEADERBOARD);
    expect(screen.getByText("Create New")).toHaveAttribute('href', ROUTES.CREATE);
  });
  
});
