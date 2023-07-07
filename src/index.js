import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'stylesheet/global.css';
import { BrowserRouter } from 'react-router-dom';
// import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/profile-page-mui">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
