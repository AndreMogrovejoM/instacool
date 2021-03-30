import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import history from './history'
import * as reducers from './ducks';
import services from './services'
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const store = createStore(combineReducers({
  ...reducers,
  form: formReducer
}), applyMiddleware(thunk.withExtraArgument(services)))


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
    
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
