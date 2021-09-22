import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Styles/main.css"
import { EntryProvider } from './util/context';

ReactDOM.render(
  <React.StrictMode>
    <EntryProvider>
      <App />
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
