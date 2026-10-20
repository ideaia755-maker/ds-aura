import * as React from "react";
import { createRoot } from "react-dom/client";
import { ButtonShowcase } from "./ButtonShowcase";
import "../../src/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ButtonShowcase />
  </React.StrictMode>,
);
