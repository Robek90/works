import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';

document.body.innerHTML = '<div id="app"></div>'; 

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <div className="bg-[#343637] justify-center flex h-full">
      <App />
    </div>
  </React.StrictMode>
);