import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";

import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Profile from "../pages/profile";

export default function Routers() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/profile" element={<Profile/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
