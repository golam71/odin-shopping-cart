import { useLoaderData } from "react-router";
import { Link } from "react-router";

import ProductCard from "./ProductCard.jsx";
import style from "./Products.module.css";

const Products = () => {
  const { productData } = useLoaderData();

  return (
    <>
      <div className={style.container}>
        {productData.map((props) => {
          return (
            <>
              <ProductCard {...props} />
            </>
          );
        })}
      </div>
      <Link to="/cart" className={style.link}>
        Checkout now
      </Link>
    </>
  );
};

export default Products;
