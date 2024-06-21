import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";
// import { search } from "../../backend/Routes/CreateUser.js";
// import Carousal from "../components/Carousal.jsx";

export default function Home() {
  const [search, setSearch] = React.useState("");
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
          item.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((filItem) => {
        return (
          <div key={filItem._id} className="mb-3 col-12 col-md-6 col-lg-3">
            <Cards foodItem={filItem} options={filItem.options[0]} />
          </div>
        );
      });
    return foodItems;
  }
  const AllCards = foodCat.map((data) => {
    return (
      <div key={"cards"} className="row mb-3">
        <div key={data._id} className="fs-3 m-3">
          {data.CategoryName}
        </div>
        <hr />

        <div className="row">{f(data.CategoryName)}</div>
      </div>
    );
  });

  // for carousal

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {/* <Carousal /> */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
          style={{}}
        >
          <div className="carousel-inner " id="carousel">
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">
                {" "}
                {/* justify-content-center, copy this <form> from navbar for search box */}
                <input
                  className="form-control me-2 w-75"
                  type="search"
                  placeholder="Type in..."
                  aria-label="Search"
                  value={search}
                  onChange={handleSearch}
                />
                {/* <button className="btn text-white bg-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg"
                className="d-block w-100"
                style={{
                  filter: "brightness(30%)",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3N8ZW58MHx8MHx8fDA%3D"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg"
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container ">{AllCards}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
