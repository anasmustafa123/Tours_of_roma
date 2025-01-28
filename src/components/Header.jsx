import React from "react";
import { Link } from "react-router";
export const Header = () => {
  return (
    <div className="header">
      <Link
        onClick={() => {
          setTimeout(() => {
            window.location.reload(true);
          }, 30);
        }}
        to={"/"}
        className="section_1"
      >
        <section className="logo_container">
          <img src="/main_logo.svg" alt="Main Logo" />
        </section>
        <section
          onClick={() => {
            sessionStorage.setItem("reload_status", "0");
          }}
          className="heading"
        >
          <div>Tours of Roma</div>
          <div className="heading_inner_text">Easy to book, Free to cancel</div>
        </section>
      </Link>
      <section className="section_2">
        <a href="#">Tours</a>
        <a href="#">Audio Guides</a>
        <a href="#">Contact</a>
      </section>
    </div>
  );
};
