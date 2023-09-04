import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import './index.css';

const rootElement = document.getElementById('root');
const root=ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
);