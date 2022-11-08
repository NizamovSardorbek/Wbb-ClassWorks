import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterDomSix from './Router6/RouterDomSix';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterDomSix/>
    </React.StrictMode>
  </BrowserRouter>
);



