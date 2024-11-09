import "../index.css";

export default function Carousal(props) {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        style={{}}
      >
        <div className="carousel-inner " id="carousel">
          <div className=" carousel-caption  " style={{ zIndex: "9" }}>
            <form className=" d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 "
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={props.search}
                onChange={props.onSearch}
              />
              {/* <button className="btn text-white bg-success" type="submit">
                Search
              </button> */}
            </form>
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
  );
}

// https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg
// https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tb3N8ZW58MHx8MHx8fDA%3D
