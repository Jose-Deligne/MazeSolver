import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuSelectionProvider from './Context/MenuSelectionContext';

ReactDOM.render(
  <React.StrictMode>
    <MenuSelectionProvider>
      <App />
    </MenuSelectionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
