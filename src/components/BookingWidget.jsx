import React, { useEffect } from "react";

const BookingWidget = (props) => {
  useEffect(() => {
    // Load the widget script when the component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = props.widget_src;
    script.async = true;

    // Append the script to the target container
    const target = document.getElementById("bookeo-widget-container");
    target.appendChild(script);

    // Cleanup the script when component unmounts (optional)
    return () => {
      target.innerHTML = ""; // Remove widget if the component is unmounted
    };
  }, []);

  return (
    <div>
      <h2>Book an Appointment</h2>
      <div id="bookeo-widget-container"></div>
      <footer>Your footer content here</footer>
    </div>
  );
};

export default BookingWidget;
