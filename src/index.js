import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducer from './reducers';
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//......DEZE WERKT WEL................................................................

// ReactDOM.render(
//   <React.StrictMode>

//     <App />

//   </React.StrictMode>,
//   document.getElementById('root'));

// reportWebVitals();

//......DEZE WERKT NIET................................................................

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

reportWebVitals();



//......DEZE WERKT WEL................................................................


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';

// // STORE -> GLOBALIZED STATE


// // ACTION -> INCREMENT

// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }

// // REDUCER

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }

// }
// let store = createStore(counter)

// // DISPLAY IN ON CONSOLE
// store.subscribe(() => console.log(store.getState()))

// // DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());

// //..............................................................................

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
