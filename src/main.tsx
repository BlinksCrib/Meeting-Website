import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./components/ContextApi/ContextApi.tsx";
import { HuddleProvider, HuddleClient } from "@huddle01/react";

const huddleClient = new HuddleClient({
  projectId: import.meta.env.APP_API,
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <HuddleProvider client={huddleClient}>
          <App />
        </HuddleProvider>
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
