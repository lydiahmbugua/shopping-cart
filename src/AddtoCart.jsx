import styles from "./AddtoCart.module.css";
import { useState } from "react";

const AddtoCart = ({ image, title, description, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 0));
  const increment = () => setQuantity((prev) => prev + 1);
  const total = (price * quantity).toFixed(2);
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(Number.isNaN(value) ? 0 : value);
  };
  return (
    <div className={styles.addCard}>
      <img className={styles.cartImage} src={image} alt={title} />
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.quantity}>
          <label htmlFor="quantity-input">Quantity</label>
          <button
            className={styles.quantBtn}
            onClick={decrement}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            id="quantity-input"
            type="number"
            min="0"
            value={quantity}
            className={styles.quantInput}
            onChange={handleChange}
          />
          <button
            className={styles.quantBtn}
            onClick={increment}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <p className={styles.total} aria-live="polite">
          Total: ${total}
        </p>
        <button className={styles.addBtn} onClick={() => addToCart(quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default AddtoCart;
