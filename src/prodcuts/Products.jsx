import { useLoaderData } from "react-router";

const Products = () => {
  const { productData } = useLoaderData();

  return <div> {productData[0].name} </div>;
};

export default Products;
