import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./ContextReducer";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const data = useCart();
  const navigate = useNavigate();
  // my order button
  let myOrder = "";
  if (localStorage.getItem("authToken")) {
    myOrder = (
      <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">
          My Orders
        </Link>
      </li>
    );
  }

  // login and logout

  const handleLogOut = () => {
    navigate("/login");
    localStorage.removeItem("authToken");
  };

  let badge = " ";
  if (data.length) {
    badge = (
      <Badge pill className="bg-danger">
        {data.length}
      </Badge>
    );
  }
  let rightNav = "";
  if (localStorage.getItem("authToken")) {
    rightNav = (
      <div className="d-flex">
        <Link className=" btn bg-white text-success mx-1" to={"/cart"}>
          My Cart{"  "}
          {badge}
        </Link>

        <Link className="btn bg-white text-danger mx-1" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    );
  } else {
    rightNav = (
      <div className="d-flex">
        <Link className=" btn bg-white text-success mx-1" to="/login">
          Log in
        </Link>

        <Link className="btn bg-white text-success mx-1" to="/createuser">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {myOrder}
            </ul>

            <div className="d-flex">{rightNav}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
