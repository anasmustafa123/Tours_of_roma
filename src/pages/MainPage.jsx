import { useAsyncError } from "react-router";
import Navbar from "../components/Navbar";
import Tour from "../components/Tour";
import TourPhone from "../components/TourPhone";
import { useEffect } from "react";

export const MainPage = () => {
  let tours = [1,2,3,4,5,6]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header_part_2">
        <img src="/header_1_img.avif" alt="" />
        <div className="header_text">
          Experience Rome with
          <div className="header_text_inner">Tours of Rome</div>
        </div>
      </div>
      <div className="header_part_3">
        <img src="/header_container_left.svg" alt="" />
        <img src="/header_img_1.gif" alt="" />
        <img src="/header_img_2.webp" alt="" />
        <img src="/header_img_3.webp" alt="" />
        <img src="/header_container_right.svg" alt="" />
      </div>
      <div className="header_part_4">
        <div>Discover Rome with the best in the business</div>
      </div>
      {tours.map((_, i) => (
        <>
                    <Tour id={i} key={i} />
                   <TourPhone id={i} key={i} />
        
        </>
      ))}
      <Navbar></Navbar>
    </>
  );
};
