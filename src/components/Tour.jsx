import React from "react";
import { Link } from "react-router";
const Tour = (props) => {
  return (
    <Link to={"/tour/:tourId"} key={props.id} className="tour_container">
      <div className="section1">
        <img src="/VaticanGroupTour_container.webp" alt="" />
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>3 hours</div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>Free Cancellation</div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="heading">Vatican Group Tour</div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A harum
          voluptatum doloribus aliquid! Suscipit voluptatem molestias, ea
          recusandae nobis cumque nulla mollitia libero reprehenderit quasi
          tenetur culpa iste eligendi ratione?
        </div>
        <div className="stars">(1105)</div>
      </div>
      <div className="section3">from 75$</div>
    </Link>
  );
};

export default Tour;
