import styles from "./Item.module.css";
import React from "react";

function Item(props) {
  return(
    <section className={styles.item}>
      <div className={styles.itemInner}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </section>
  );
}

export default Item;