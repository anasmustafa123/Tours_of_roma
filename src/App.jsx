import { Route, Routes, Link } from "react-router";
import { MainPage } from "./pages/MainPage";
import TourPage from "./pages/TourPage";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import mongoose from "mongoose";
import { useEffect } from "react";
import BookingWidget from "./components/BookingWidget";

function App() {
  useEffect(() => {
    // Save a value
    if (
      !sessionStorage.getItem("reload_status") ||
      sessionStorage.getItem("reload_status") != "1"
    ) {
      sessionStorage.setItem("reload_status", "0");
    }
    console.log({ mongoose_key: import.meta.env.VITE_MONGOOSE_KEY });
    console.log({ mongoose });
    //mongoose.connect(import.meta.env.VITE_MONGOOSE_KEY);
  }, []);
  return (
    <>
      <div className="header_part_1_flag"></div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tour/:tourId" element={<TourPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
