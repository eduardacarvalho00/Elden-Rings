import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import './index.css';
import RouterApp from './routes';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RouterApp />

  </React.StrictMode>
);

