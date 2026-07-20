import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import cartPic from "./assets/cart.svg";

const Cart = () => {
  const { cart, removeFromCart, increment, decrement } = useOutletContext();

  if (cart.length === 0)
    return (
      <div className={styles.empty}>
        <img
          className={styles.cartPic}
          src={cartPic}
          alt=""
          aria-hidden="true"
        />
        <p className={styles.cartPara}>Your cart is empty.</p>
      </div>
    );

  const cartTotal = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className={styles.cart}>
      <p className={styles.cartTitle}>My Cart</p>
      {cart.map((item) => (
        <div key={item.id} className={styles.items}>
          <div className={styles.item}>
            <div className={styles.itemLeft}> {item.title}</div>
            <div className={styles.itemMid}>
              <button
                className={styles.quantBtn}
                onClick={() => decrement(item.id)}
                aria-label="Decrease quantity for {item.title}"
              >
                -
              </button>
              {item.quantity}
              <button
                className={styles.quantBtn}
                onClick={() => increment(item.id)}
                aria-label="Increase quantity for {item.title}"
              >
                +
              </button>
            </div>
            <div className={styles.itemRight}>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.trash}
                onClick={() => removeFromCart(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    removeFromCart(item.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Remove ${item.title} from cart`}
              >
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <p aria-live="polite" className={styles.totalPara}>
        Total: ${cartTotal}
      </p>
    </div>
  );
};
export default Cart;
