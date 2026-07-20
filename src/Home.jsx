import styles from "./Home.module.css";
import ctaImage from "./assets/cta.svg";
import dress from "./assets/dress.svg";
import pants from "./assets/pants.svg";
import shirt from "./assets/shirt.svg";
import shoes from "./assets/shoes.svg";
import accessory from "./assets/accessory.svg";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.heroSection}>
        <div className={styles.cta}>
          <p className={styles.huge}>Best Priced Second Hand Items</p>
          <p className={styles.small}>
            Shop the latest trends with the most afforable pricing
          </p>

          <Link to="/shop" className={styles.button}>
            Shop Now
          </Link>
        </div>
        <img
          className={styles.ctaImage}
          src={ctaImage}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className={styles.productCategories}>
        <div className={styles.card}>
          <img src={shirt} aria-hidden="true" className={styles.icon} />
          <p className={styles.title}>Shirts</p>
        </div>
        <div className={styles.card}>
          <img src={pants} aria-hidden="true" className={styles.icon} />
          <p className={styles.title}>Pants</p>
        </div>
        <div className={styles.card}>
          <img src={shoes} aria-hidden="true" className={styles.icon} />
          <p className={styles.title}>Shoes</p>
        </div>
        <div className={styles.card}>
          <img src={dress} aria-hidden="true" className={styles.icon} />
          <p className={styles.title}>Dresses</p>
        </div>

        <div className={styles.card}>
          <img src={accessory} aria-hidden="true" className={styles.icon} />
          <p className={styles.title}>Accessories</p>
        </div>
      </div>
      <div className={styles.contact}>
        <p>Dont hesitate to reach out to us </p>
        <p>Email: thisisafakestoredude@whatemail.com</p>
        <p>Phone No: +254-FAKE-12345</p>
      </div>
    </div>
  );
};
export default Home;
