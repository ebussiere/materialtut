import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
const history = createBrowserHistory();

ReactDOM.render(
  
   
    <Provider store={store}>
      <Router history={history}>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
      </Provider>,
      
  
  document.getElementById('root')
);


