import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDiBs0Qb32oT42PLeEIBuOyyFBoOnY5xPU',
//   authDomain: 'fir-epicur.firebaseapp.com',
//   databaseURL: 'https://fir-epicur-default-rtdb.firebaseio.com',
//   projectId: 'fir-epicur',
//   storageBucket: 'fir-epicur.appspot.com',
//   messagingSenderId: '226954946125',
//   appId: '1:226954946125:web:f0ac0ec5c1116fc4a81e04',
//   measurementId: 'G-ZX8XZFC874',
// };
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
