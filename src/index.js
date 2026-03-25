import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import Learn from "./pages/Learn";
import Support from "./pages/Support";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="learn" element={<Learn />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);























