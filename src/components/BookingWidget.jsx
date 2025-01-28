import React, { useEffect } from "react";

const BookingWidget = (props) => {
  useEffect(() => {
    // Load the widget script when the component mounts
    const script = document.createElement("script");
    script.onload = () => {
      console.log("Widget script loaded and ready to initialize");
      if (window.bookeo_start) {
        let res = window.bookeo_start();
      }
    };
    script.onerror = (error) => {
      console.error("Error loading widget script:", error);
    };
    script.type = "text/javascript";
    script.src = props.widget_src;
    script.async = true;
    const target = document.getElementById("bookeo-widget-container");
    target.innerHTML = "";
    target.appendChild(script);
    return () => {
      target.innerHTML = ""; // Remove widget if the component is unmounted
      console.log("remove child")
    };
  }, []);

  return <div id="bookeo-widget-container"></div>;
};

export default BookingWidget;
