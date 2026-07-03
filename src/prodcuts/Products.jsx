import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard.jsx";
import style from "./Products.module.css";

const Products = () => {
  const { productData } = useLoaderData();

  return (
    <div className={style.container}>
      {productData.map((d) => {
        let values = Object.values(d);
        return (
          <>
            <ProductCard {...d} />
          </>
        );
      })}
    </div>
  );
};

export default Products;
