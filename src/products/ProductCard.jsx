import { useOutletContext, useSearchParams } from "react-router";
import PropTypes from "prop-types";
import style from "./Products.module.css";
import { useState } from "react";

const ProductCard = ({ id, name, shortDescription, price, image, count }) => {
  const { storeData, setStoreData } = useOutletContext();

  return (
    <>
      <div className={style.card}>
        <img src={image} alt={shortDescription} />
        <div className={style.flex}>
          <h3 className={style.name}>{name}</h3>
          <p style={{ fontVariantNumeric: "tabular-nums" }}>
            {count < 1 ? price : Math.floor(price * count * 100) / 100}$
          </p>
        </div>
        <p className={style.description}>{shortDescription}</p>

        <div className={style.flexButtons}>
          <button
            type="button"
            onClick={() => {
              setStoreData(
                storeData.map((product) =>
                  product.id === id && product.count > 0
                    ? { ...product, count: product.count - 1 }
                    : product,
                ),
              );
            }}
          >
            -
          </button>

          {/* <p>{count}</p> */}
          <input
            className={style.input}
            type="number"
            value={count}
            onChange={(e) => {
              setStoreData(
                storeData.map((product) =>
                  product.id == id
                    ? { ...product, count: Number(e.target.value) }
                    : product,
                ),
              );
            }}
          />
          <button
            type="button"
            onClick={() => {
              setStoreData(
                storeData.map((product) =>
                  product.id === id
                    ? { ...product, count: product.count + 1 }
                    : product,
                ),
              );
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
