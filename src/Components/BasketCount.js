function BasketCount(props) {
  if (props.basket.length === 0 || props.basket.length > 1)
    return <h4> {props.basket.length} items </h4>;
  else return <h4> {props.basket.length} item </h4>;
}

export default BasketCount;
