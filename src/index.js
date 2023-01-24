import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let visitCount = localStorage.getItem("page_view")
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount)
} else {
  visitCount = 1;
  localStorage.setItem("page_view", visitCount)
}

root.render(
  <React.StrictMode>
    <App visitCount={visitCount} />
  </React.StrictMode>
);