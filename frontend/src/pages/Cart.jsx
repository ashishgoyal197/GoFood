// import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart, useDispatchCart } from "../context/ContextReducer";
import Navbar from "../components/Navbar";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="mb-4">
          <Navbar />
        </div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  const handleCheckOut = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");

    const response = await fetch("http://localhost:5000/api/orderdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: userEmail,
        order_data: data,
        order_date: new Date().toDateString(),
      }),
    });
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-primary fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={food.id}>
                <th scope="row ">
                  <span className="text-primary">{index + 1}.</span>
                </th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <DeleteIcon
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">
            <span className="text-primary">Total-Price:</span> {totalPrice}/-
          </h1>
        </div>
        <div>
          <button className="btn bg-primary mt-5 " onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
