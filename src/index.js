import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const wrapper = <Provider store={store}>
                  <App />
                </Provider>

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
