import React from 'react';

import { render } from 'react-dom';

// Import Components
import App from './components/App';
import RegistrationForm from './components/RegistrationForm';
import Result from './components/Result';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RegistrationForm}></IndexRoute>
        <Route path="/result" component={Result}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));