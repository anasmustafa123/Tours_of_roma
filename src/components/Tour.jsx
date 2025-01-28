import React from "react";
import { Link } from "react-router";
const Tour = (props) => {
  return (
    <Link to={"/tour/:tourId"} key={props.id} className="tour_container">
      <div className="section1">
        <img src="/VaticanGroupTour_container.webp" alt="" />
        <div className="extention_container">
          <div className="extention">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-57kesc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AccessTimeIcon"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            <div>3 hours</div>
          </div>
          <div className="extention">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-57kesc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckIcon"
            >
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
            </svg>
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
