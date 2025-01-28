import React from "react";
import { Link } from "react-router";

const TourPhone = (props) => {
  return (
    <Link to={"/tour/:tourId"} key={props.id} className="tour_container_phone">
      <img src="/VaticanGroupTour_container.webp" alt="main image" />
      <div className="heading">Vatican Group Tour</div>
      <div className="section1">
        <div className="hearts">4.5</div>
        <div className="rating">(1101)</div>
      </div>
      <div className="content">
        The tour that everybody talks about. Explore the Vatican City with a
        guided tour led by a professional art historian. Discover the treasures
        of
      </div>
      <div className="price_container">
        from $<div className="price">99</div>
      </div>
    </Link>
  );
};

export default TourPhone;
