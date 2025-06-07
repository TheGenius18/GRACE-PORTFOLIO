import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js";

// ✅ Force dark mode before rendering the app
document.documentElement.classList.remove("light");
document.documentElement.classList.add("dark");
localStorage.theme = "dark";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
