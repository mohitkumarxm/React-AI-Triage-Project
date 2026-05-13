import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "@/store/store";
import { QueryProvider } from "@/app/providers/query-provider";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <Toaster position="top-right" />
        <App />
      </QueryProvider>
    </Provider>
  </StrictMode>,
);
