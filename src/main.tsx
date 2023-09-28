import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  yourDetails: {
    minute: "*",
    hour: "*",
    dayOfMonth: "*",
    month: "*",
    dayOfWeek: "*",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
);
