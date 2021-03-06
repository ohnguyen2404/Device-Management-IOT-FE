import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './store'
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
