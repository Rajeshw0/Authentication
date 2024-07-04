// src/pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </Provider>
    );
  }

  export default MyApp;