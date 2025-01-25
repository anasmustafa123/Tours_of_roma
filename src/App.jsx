import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import TourPage from "./pages/TourPage";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
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
