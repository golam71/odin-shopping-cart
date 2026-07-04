import { Link } from "react-router";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

import { useOutletContext } from "react-router";

const Navbar = ({ storeData }) => {
  let count = 0;
  storeData.forEach((data) => {
    count += data.count;
  });

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Odin Cart
        </Link>
        <Link to="/products">Products</Link>
        <Link style={{ fontVariantNumeric: "tabular-nums" }} to="/cart">
          Cart {count > 0 ? `(${count})` : ""}{" "}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

Navbar.prototype = {
  storeData: PropTypes.array.isRequired,
};
