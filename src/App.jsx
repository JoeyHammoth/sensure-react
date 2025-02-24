import React from "react"; // default export
import { createRoot } from "react-dom/client";

const App = function () {
  return <h1>Welcome!</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
