import React from "react";
import { useDispatchCart, useCart } from "../context/ContextReducer";
import "../index.css";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState(priceOptions[0]);

  const allOptions = priceOptions.map((data) => {
    return (
      <option key={data} value={data}>
        {data}
      </option>
    );
  });

  // add to cart button

  const handleClick = async () => {
    let food = [];

    for (const item of data) {
      console.log(item.size + "- " + size);
      if (item.id === props.foodItem._id && item.size === size) {
        food = item;
        break;
      }
    }

    if (Object.keys(food).length) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        size: size,
        price: finalPrice,
        qty: qty,
      });
      return;
    }
    // console.log(data);
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  const finalPrice = qty * parseInt(options[size]);

  return (
    <div>
      <div className="card" style={{ minWidth: "250px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top cardImg"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-warning">{props.foodItem.name}</h5>
          {/* <p className="card-text">{props.foodItem.description}</p> */}
          <select
            name=""
            id=""
            className="m-2 h-100 w-20 bg-primary text-white rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id=""
            className="m-2 h-100 w-20 bg-primary text-white rounded"
            onChange={(e) => setSize(e.target.value)}
          >
            {allOptions}
          </select>
          <div className="d-inline">₹{finalPrice}/-</div>
          <hr />
          <button
            className="btn btn-primary justify-center ms-2"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
