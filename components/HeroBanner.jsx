import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Small text</p>
        <h3>TEXT</h3>
        <img
          src=""
          alt="picture-banner-keyboard"
          className="hero-banner-image"
        />
        <div>
          <Link href='#'>
            <button type="button">BTN</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
