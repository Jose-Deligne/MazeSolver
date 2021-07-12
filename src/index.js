import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MenuSelectionProvider from './Context/MenuSelectionContext';
import CellInfoProvider from './Context/CellInfoContext';

ReactDOM.render(
  <React.StrictMode>
    <MenuSelectionProvider>
      <CellInfoProvider>
        <App />
      </CellInfoProvider>
    </MenuSelectionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
