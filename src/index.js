import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store ,{persistStor} from './store/Store'
import {PersistGate} from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}><PersistGate loading={null} persistor={persistStor}><App /></PersistGate></Provider>
  </React.StrictMode>
);

