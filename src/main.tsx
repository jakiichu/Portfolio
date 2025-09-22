import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";
import * as Sentry from "@sentry/react";

import App from "@/App.tsx";
import { Provider } from "@/provider.tsx";

Sentry.init({
  dsn: "https://e0f9ba6b86870e851862c3946d2db356@o4509093293981696.ingest.de.sentry.io/4510044262760528",
  sendDefaultPii: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
