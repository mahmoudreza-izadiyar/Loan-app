import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router should be here, not in App.tsx */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
