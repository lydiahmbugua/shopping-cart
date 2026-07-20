import { Outlet } from "react-router";
import { useState } from "react";
import Nav from "./Nav.jsx";
import styles from "./App.module.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrement = (id) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0), // auto-remove if it hits 0
    );
  };

  return (
    <div className={styles.container}>
      <Nav cart={cart} />
      <Outlet
        context={{
          cart,
          addToCart,
          removeFromCart,
          increment,
          decrement,
        }}
      />
    </div>
  );
};
export default App;
