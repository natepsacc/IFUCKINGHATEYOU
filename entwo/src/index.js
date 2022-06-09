import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ENEnter from './App';
import GalleryLayout from './gallery.js';
import { HashRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";


import reportWebVitals from './reportWebVitals';
const theme = createTheme({
spacing: 2,
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 640,
      tablet: 1024,
      desktop: 1200,
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>

  <React.StrictMode>
  <HashRouter basename='/'>
  <App />
  </HashRouter>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
