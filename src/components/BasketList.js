import React from "react";
import Basket from "./Basket";

function BasketList(props) {
  if (props.basket.length === 0) {
    return <h3>Sorry, no items in basket</h3>;
  } else
    return props.basket.map((basketItem) => (
      <Basket
        key={basketItem.trackId}
        basketItem={basketItem}
        removeFromBasket={props.removeFromBasket}
      />
    ));
}

export default BasketList;
