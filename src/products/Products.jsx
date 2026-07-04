import { useLoaderData, useOutletContext } from "react-router";
import { Link } from "react-router";

import { useEffect } from "react";

import ProductCard from "./ProductCard.jsx";
import style from "./Products.module.css";

const Products = () => {
  const { storeData, setStoreData } = useOutletContext();
  const { productData } = useLoaderData();

  useEffect(() => {
    if (storeData.length == 0) {
      setStoreData(productData.map((p) => ({ ...p, count: 0 })));
    }
  }, []);

  return (
    <>
      <div className={style.container}>
        {storeData.map((props) => {
          return <ProductCard key={props.id} {...props} />;
        })}
      </div>
      <Link to="/cart" className={style.link}>
        Checkout now
      </Link>
    </>
  );
};

export default Products;
