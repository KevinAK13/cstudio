import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LangProvider } from "./context/langContext.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>
);
