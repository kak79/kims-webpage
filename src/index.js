import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
       <App />
     </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
