import { configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';




const store = configureStore({
  reducer: rootReducer, 
  // enhancers: [composeWithDevTools()]
  // devTools: false, // Відключає вбудований devtools в configureStore
  // enhancers: [composeWithDevTools({ realtime: true })] // Використовує redux-devtools-extension
});

export default store;
