import React from "react";
import { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductArea } from "../css/styled";

export const Cart = (props) => {
  const [data, setData] = useState(getItem("carrinho") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const handleClick = () => {
    const {
      history: { push },
    } = props;
    push(`/payment/${subTotal}`);
    setItem("carrinho", []);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div>
      <h3>{`SubTotal: R$ ${subTotal}`}</h3>
      <ProductArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$ ${e.price}`}</h4>

            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductArea>

      <button disabled={!subTotal > 0} onClick={handleClick}>
        Comprar
      </button>
      <br />
      <br />
    </div>
  );
};

export default Cart;
