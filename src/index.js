import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

const urlParams = new URLSearchParams(window.location.search);
const redirectParam = urlParams.get('redirect');

if (redirectParam) {
  window.history.replaceState({}, '', redirectParam);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
