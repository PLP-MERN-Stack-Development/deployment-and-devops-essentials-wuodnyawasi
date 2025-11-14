import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initSentry } from './sentry';
import reportWebVitals, { sendToAnalytics } from './reportWebVitals';

// Initialize Sentry
initSentry();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Report web vitals for performance monitoring
reportWebVitals(sendToAnalytics);
