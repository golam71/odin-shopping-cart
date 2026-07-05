import { useOutletContext } from "react-router";
import style from "./Cart.module.css";

const Cart = () => {
  const { storeData, setStoreData } = useOutletContext();

  const buyList = storeData.filter((data) => data.count !== 0);

  return (
    <>
      {buyList.length < 1 ? "Buy some  items first in the shop page" : ""}

      {buyList.map((list) => {
        return (
          <div key={list.id} className={style.cartCard}>
            <img src={list.image} alt={list.shortDescription} />
            <div className={style.text}>
              <h3>{list.name}</h3>
              <p>{Math.floor(list.price * list.count * 100) / 100}$</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
