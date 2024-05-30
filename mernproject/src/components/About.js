import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2>Our story</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <p>
            Certainly! Here's a 1000 lines paragraph: In the vast expanse of the
            cosmos, amidst the swirling galaxies and shimmering stars, there
            exists a beauty beyond comprehension. Each speck of dust, each
            celestial body, tells a story of cosmic evolution and wonder. From
            the fiery birth of stars in the depths of interstellar clouds to the
            serene dance of planets around their parent suns, the universe
            unfolds its mysteries with grace and majesty. In the grand tapestry
            of existence, we find ourselves but a tiny thread, woven into the
            fabric of space and time. Yet, within us lies a spark of
            consciousness, a glimmer of awareness that seeks to understand the
            universe and our place within it. Through the lens of science and
            the language of mathematics, we strive to unravel the secrets of the
            cosmos, to decipher the laws that govern its motion and behavior.
            From the elegant equations of Newton to the mind-bending concepts of
            quantum mechanics and general relativity, we journey ever deeper
            into the heart of reality, seeking truth amidst the chaos.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://image.shutterstock.com/z/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mt-3">Ingredients</h3>
          <p>
            Along the way, we encounter phenomena beyond imagination: black
            holes that warp the very fabric of spacetime, pulsars that emit
            beams of radiation with clock-like precision, and galaxies that
            collide in a celestial ballet spanning millions of years. Yet, for
            all our knowledge and understanding, the universe remains a realm of
            infinite possibility, a playground for the imagination where the
            boundaries of reality blur and fade. In the midst of this cosmic
            symphony, our own planet, Earth, shines as a beacon of life and
            diversity.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 order-md-2">
          <img
            src="https://thumb1.shutterstock.com/display_pic_with_logo/2982127/437116033/stock-photo-happy-chef-437116033.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center">
          <div>
            <h3>Our chefs</h3>
            <p>
              Along the way, we encounter phenomena beyond imagination: black
              holes that warp the very fabric of spacetime, pulsars that emit
              beams of radiation with clock-like precision, and galaxies that
              collide in a celestial ballet spanning millions of years.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://thumb9.shutterstock.com/display_pic_with_logo/175989610/669255388/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-669255388.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <h4>45 min delivery</h4>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default About;
