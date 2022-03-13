import React from "react";
import Product from "./Product";

function ProductList(props) {
  if (props.products.length === 0) {
    return <h3> No items found... </h3>;
  } else
    return props.products
      .filter((product) => !product.inBasket)
      .map((productItem) => (
        <Product
          key={productItem.trackId}
          product={productItem}
          addToBasket={props.addToBasket}
        />
      ));
}

export default ProductList;
