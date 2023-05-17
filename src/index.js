import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  store  from './redux/store';
import { Provider } from 'react-redux';


import './scss/app.scss'

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <Provider store={store}>
            <App />
          </Provider>} />
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


