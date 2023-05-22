import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  store  from './redux/store';
import { Provider } from 'react-redux';


import './scss/app.scss'
import {Home, Cart} from './pages';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={
                      <App />
                  }>
                      <Route path='/' element={<Home/>} exact > </Route>
                      <Route path='/cart' element={<Cart/>} exact />
                  </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
    {/* <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <Provider store={store}>
            <App />
          </Provider>} />
      </Routes>
    </BrowserRouter> */}
   
  </React.StrictMode>
);
//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, 
//   createRoutesFromElements,
//   Route, 
//   RouterProvider } from 'react-router-dom';



// import './scss/app.scss'

// import App from './App';

// const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={
  
//     <App />}>

//     </Route>));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );




