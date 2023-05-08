import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ForecastProvider from './shared/providers/ForecastProvider';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ForecastProvider>
        <App />
      </ForecastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
