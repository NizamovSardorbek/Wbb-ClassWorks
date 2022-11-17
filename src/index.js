import React from 'react';
import ReactDOM from 'react-dom/client';
import Fetch from './Fetch/Fetch';
import './index.css';
import Resful from './Resful/Resful';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Resful/>
      <Fetch/>
    </React.StrictMode>
);



