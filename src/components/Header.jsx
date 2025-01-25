import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <section className="section_1">
        <section className="logo_container">
          <img src="/main_logo.svg" alt="Main Logo" />
        </section>
        <section className="heading">
          <div>Tours of Roma</div>
          <div className="heading_inner_text">Easy to book, Free to cancel</div>
        </section>
      </section>
      <section className="section_2">
        <a href="#">Tours</a>
        <a href="#">Audio Guides</a>
        <a href="#">Contact</a>
      </section>
    </div>
  );
};
