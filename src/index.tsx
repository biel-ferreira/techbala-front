import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import ModalsProvider from "./context/Modals";
import AuthProvider from './context/AuthContext';
import { BuscaProvider } from "./context/BuscaContext";
import { CarrinhoProvider } from "./context/CarrinhoContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalsProvider>
      <AuthProvider>
        <CarrinhoProvider>
          <BuscaProvider>
            <App />
          </BuscaProvider>
        </CarrinhoProvider>
      </AuthProvider>
    </ModalsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
