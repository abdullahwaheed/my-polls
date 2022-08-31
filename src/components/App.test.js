import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import App from "./App";
import store from "../store";

describe('<App>', () => {
  it('create snapshot', () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  })
})