function BasketTotal(props) {
  const total = props.basket.reduce((currentTotal, basketItem) => {
    return basketItem.trackPrice + currentTotal;
  }, 0);

  return <h3> Basket total = £{total}</h3>;
}

export default BasketTotal;
