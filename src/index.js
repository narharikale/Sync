import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react';
import store from './frontend/app/store'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ChakraProvider>
        <Provider store={ store }>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ChakraProvider>
  </React.StrictMode>
);

