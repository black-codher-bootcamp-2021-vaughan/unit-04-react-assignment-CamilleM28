import React from "react";
import "../styles/button.css";

function Basket(props) {
  return (
    <div key={props.basketItem.trackId}>
      <h4>{props.basketItem.kind ? props.basketItem.kind : "No Type"}</h4>
      <h2>
        {props.basketItem.trackName
          ? props.basketItem.trackName
          : "No Track Name"}
      </h2>
      <h3>
        {props.basketItem.artistName
          ? props.basketItem.artistName
          : "No Artist"}
      </h3>
      <p>
        {props.basketItem.trackPrice
          ? "£" + props.basketItem.trackPrice
          : "No Price"}
      </p>
      <img src={props.basketItem.artworkUrl100} alt="Media artwork" />
      <br />
      <button
        className="button"
        onClick={() => props.removeFromBasket(props.basketItem)}
      >
        Remove item
      </button>
    </div>
  );
}

export default Basket;
