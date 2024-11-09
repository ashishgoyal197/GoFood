import React from "react";
import Card from "./Card";

export default function Cards(props) {
  const [foodCat, setFoodCat] = React.useState([]);
  const [foodItem, setFoodItem] = React.useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  function f(name) {
    const foodItems = foodItem
      .filter(
        (item) =>
          item.CategoryName === name &&
          item.name.toLowerCase().includes(props.search.toLowerCase())
      )
      .map((filItem) => {
        return (
          <div
            key={filItem._id}
            className="mb-3 col-12 col-md-6 col-lg-4 col-xxl-3 "
          >
            <Card foodItem={filItem} options={filItem.options[0]} />
          </div>
        );
      });
    return foodItems;
  }

  const AllCard = foodCat.map((data) => {
    return (
      <div key={"Card"} className="row mb-3">
        <div key={data._id} className="fs-3 m-3">
          {data.CategoryName}
        </div>
        <hr />

        <div className="row">{f(data.CategoryName)}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="container d-flex align-items-start flex-column">
        {AllCard}
      </div>
    </div>
  );
}
