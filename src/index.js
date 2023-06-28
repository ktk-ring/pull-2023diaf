import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <ScrollToTop />
    <App />
  </Router>
);

reportWebVitals();
