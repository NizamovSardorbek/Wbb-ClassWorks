import React from 'react';
import ReactDOM from 'react-dom/client';
import Fetch from './Fetch/Fetch';
import LoginFetch from './Fetch/LoginFetch';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Fetch/>
      <LoginFetch/>
    </React.StrictMode>
);



