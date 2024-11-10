import React, { lazy, Suspense } from "react";
import Navbar from "./composnat/NavBar";
import Footer from "./composnat/Footer";
import { Routes, Route } from "react-router-dom";
const App = lazy(() => import("./composnat/App"));
const Carousel = lazy(() => import("./composnat/Carousel"));
const Modal = lazy(() => import("./composnat/Modal"));
const Home = lazy(() => import("./composnat/Home"));

export default function routes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/fadoua" element={<Home />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/App" element={<App />} />
      </Routes>
      <Footer />
    </div>
  );
}
