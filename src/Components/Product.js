import React from "react";
import "../styles/button.css";

const Product = (props) => {
  return (
    <div>
      <h4>{props.product.kind ? props.product.kind : "No Type"}</h4>
      <h2>
        {props.product.trackName ? props.product.trackName : "No Track Name"}
      </h2>
      <h3>
        {props.product.artistName ? props.product.artistName : "No Artist"}
      </h3>
      <p>
        {props.product.trackPrice ? "£" + props.product.trackPrice : "No Price"}
      </p>
      <img src={props.product.artworkUrl100} alt="Media artwork" />
      <br />
      <button
        className="button"
        onClick={() => props.addToBasket(props.product)}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
