import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

const wrapper = <Provider store={store}>
                  <App />
                </Provider>

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
