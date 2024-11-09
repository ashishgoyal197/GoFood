import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
// import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./context/ContextReducer.jsx";
import Cart from "./pages/Cart.jsx";
import MyOrder from "./pages/MyOrder.jsx";
import { useAuthContext } from "./context/ContextReducer.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/createuser"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/cart"
            element={authUser ? <Cart /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/myorder"
            element={authUser ? <MyOrder /> : <Navigate to="/login" />}
          ></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
