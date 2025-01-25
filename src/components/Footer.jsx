import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="section1">
          <img src="/main_logo.svg" alt="main logo" />
        </section>
        <section className="section2">
          <section>
            <a>Services</a>
            <a>Tours</a>
            <a>Audio guides</a>
          </section>
          <section>
            <a>Legal</a>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>Cancellation Policy</a>
            <a>Cookies</a>
          </section>
          <section>
            <a>Helpful Links</a>
            <a>Contact</a>
          </section>
        </section>
      </div>
      <div className="footer_visas_container">
        <img src="/visas.webp" alt="" />
      </div>
    </>
  );
};
