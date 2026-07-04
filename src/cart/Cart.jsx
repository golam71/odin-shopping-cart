import { useOutletContext } from "react-router";
import style from "./Cart.module.css";

const Cart = () => {
  const { storeData, setStoreData } = useOutletContext();

  const buyList = storeData.filter((data) => data.count != 0);
  console.log(buyList);

  return (
    <>
      {buyList.map((list) => {
        return (
          <>
            <div className={style.cartCard}>
              <img src={list.image} alt={list.shortDescription} />
              <div className={style.text}>
                <h3>{list.name}</h3>
                <p>{Math.floor(list.price * list.count * 100) / 100}$</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cart;
