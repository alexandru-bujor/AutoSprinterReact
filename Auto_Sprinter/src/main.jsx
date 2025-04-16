// src/main.jsx
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for toggler, collapse, etc.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
