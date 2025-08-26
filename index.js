import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 글로벌 CSS 적용
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 웹 성능 측정
reportWebVitals();
