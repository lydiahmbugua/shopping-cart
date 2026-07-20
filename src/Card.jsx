import styles from "./Card.module.css";

const Card = ({ image, title, price, onClick }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <img src={image} className={styles.cardImg} alt={title} />
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};
export default Card;
