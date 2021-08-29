import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';
import { data } from './services/mock';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/statement', () => {
      return data;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
