import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './Hook';
import './index.css';
import Raducer from './Raducer';
import UseEffect from './UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook/>
    <UseEffect/>
    <Raducer/>
  </React.StrictMode>
);



