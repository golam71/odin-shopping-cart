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
          <p>{price}$</p>
        </div>
        <p className={style.description}>{shortDescription}</p>

        <div className={style.flexButtons}>
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
              if (count == 0) {
                setCount(0);
                return;
              }
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
