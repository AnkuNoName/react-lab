import styles from "./Cart.module.css";
import React from "react";

function Cart(props) {
  return(
    <div className={styles.cartInner}>
      <div className="cartItem">
        <h1 className="cartName">{props.name}</h1>
        <p className="cartPrice">{props.price} грн</p>
      </div>
    </div>
  );
};

export default Cart;