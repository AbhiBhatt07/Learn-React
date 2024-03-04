import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = React.createElement(
  "span",
  { href: "https://google.com" },
  "Click here to redirect Google."
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  reactElement
);
