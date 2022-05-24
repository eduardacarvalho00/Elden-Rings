import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './Components/Home/menu';
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>
);

