import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <p className="info">
        <ul>
          <h2> App instructions</h2>
          <li>
            Use the search bar to search for your favourite media and easily add
            your selections to your basket using the "Add to Basket" button.
          </li>
          <li>
            Navigate to your basket to view your selections and the total price.
          </li>
          <li>
            If you change your mind about an item, simply navigate to your
            basket and select the "Remove item" button.
          </li>
        </ul>

        <h3 className="welcome">
          This Media Application was created and designed by Camille
        </h3>
      </p>
    </div>
  );
}

export default About;
