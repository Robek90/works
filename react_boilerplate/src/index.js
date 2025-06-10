import React from 'react'; // ← Добавьте этот импорт
import { createRoot } from 'react-dom/client';
import App from './App.js'; // ← Убедитесь, что импорт App корректен

// Очистка существующего HTML-контента
document.body.innerHTML = '<div id="app"></div>';

// Рендер вашего React-компонента
const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);