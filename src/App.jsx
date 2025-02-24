import React from "react"; // default export
import { createRoot } from "react-dom/client";

import Header from "./Header";
import Footer from "./Footer";

const App = function () {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
