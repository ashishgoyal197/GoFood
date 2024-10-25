import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup.jsx";
// import ReactDOM from 'react-dom/client'
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer.jsx";
import Cart from "./screens/Cart.jsx";
import MyOrder from "./components/MyOrder.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/myorder" element={<MyOrder />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
