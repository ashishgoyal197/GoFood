import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useAuthContext, useCart } from "../context/ContextReducer";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const data = useCart();
  const { authUser, setAuthUser } = useAuthContext();

  // my order button
  let myOrder = "";
  if (authUser) {
    myOrder = (
      <li className="nav-item">
        <Link
          className="nav-link active fs-5"
          aria-current="page"
          to="/myorder"
        >
          My Orders
        </Link>
      </li>
    );
  }

  // login and logout

  const handleLogOut = () => {
    // navigate("/login");
    localStorage.removeItem("authToken");
    setAuthUser(null);
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
  if (authUser) {
    rightNav = (
      <div className="d-flex">
        <Link className=" btn bg-white text-primary mx-1" to={"/cart"}>
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
        <Link className=" btn bg-white text-primary mx-1" to="/login">
          Log in
        </Link>

        <Link className="btn bg-white text-primary mx-1" to="/createuser">
          Sign Up
        </Link>
      </div>
    );
  }

  const [toggle] = useState(false);
  const handleClick = () => {
    console.log("clicked");
  };

  let temp = toggle ? (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style="width: 280px;"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16"></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <div>{temp}</div>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning fs-1 fst-italic" to="/">
            GoFood
          </Link>
          {/* side button for menu bar */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={handleClick}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              {authUser ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              ) : (
                ""
              )}
              {myOrder}
            </ul>

            <div className="d-flex">{rightNav}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
