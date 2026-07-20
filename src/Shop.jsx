import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import Card from "./Card.jsx";
import AddtoCart from "./AddtoCart.jsx";

const useItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, error, loading };
};

const Shop = () => {
  const { items, error, loading } = useItems();
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useOutletContext();

  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e) => e.key === "Escape" && setSelectedItem(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedItem]);

  if (loading)
    return (
      <div className={styles.page}>
        <p className={styles.pagePara} role="status" aria-live="polite">
          Loading....
        </p>
      </div>
    );
  if (error)
    return (
      <div className={styles.page}>
        <p className={styles.pagePara} role="alert">
          A network error was encountered
        </p>
      </div>
    );

  return (
    <div className={styles.shop}>
      {items.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          onClick={() => setSelectedItem(item)}
        />
      ))}
      {selectedItem && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="addtocart-title"
            onClick={(e) => e.stopPropagation()}
          >
            <AddtoCart
              image={selectedItem.image}
              title={selectedItem.title}
              id="addtocart-title"
              description={selectedItem.description}
              price={selectedItem.price}
              addToCart={(quantity) => {
                addToCart(selectedItem, quantity);
                setSelectedItem(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Shop;
