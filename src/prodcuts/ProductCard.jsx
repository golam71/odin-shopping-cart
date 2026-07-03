import { useState } from "react";
import style from "./Products.module.css";

const ProductCard = ({ name, shortDescription, price, image }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={style.card}>
        <img src={image} alt={`Image of ${shortDescription}`} />
        <div className={style.flex}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.price}>{price}$</p>
        </div>
        <p>{shortDescription}</p>

        <div className={style.flex}>
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            +
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              setCount((count) => count - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
