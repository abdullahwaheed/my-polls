import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import App from "./App";
import store from "../store";
import browserHistory from '../history';

describe('<App>', () => {
  it('create snapshot', () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <App history={browserHistory} />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  })
})