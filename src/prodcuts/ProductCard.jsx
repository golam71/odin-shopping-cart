import { useState } from "react";
import style from "./Products.module.css";

const ProductCard = ({ name, shortDescription, price, image }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={style.card}>
        <h3>{name}</h3>
        <img src={image} alt={`Image of ${shortDescription}`} />
        <p>{shortDescription}</p>
        <p>{price}$</p>

        <div className="flex">
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
