import React from 'react';
import ReactDOM from 'react-dom/client';
import Fetch from './Fetchs/Fetch';
import Login from './Fetchs/Login';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Login/>
      <Fetch/>
    </React.StrictMode>
);



