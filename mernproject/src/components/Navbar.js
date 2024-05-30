import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PizzeriaLogo from "../images/PizzeriaLogo.png";
import { IoCartSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../features/cartSlice";
import { MdMenu } from "react-icons/md";

import "./Navbar.css";

function Navbar() {
  const { cartItems, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0">
            P<small>izzeria</small>
          </h2>
          <img
            src={PizzeriaLogo}
            alt="logo"
            width="90"
            height="80"
            className="ms-2"
          />
        </Link>
        <button
          className="navbar-toggler btn btn-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <MdMenu />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Orderpizza" className="nav-link">
                Order Pizza
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Custompizza" className="nav-link">
                Build your Pizza
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <IoCartSharp className="me-1" /> Shopping Cart ({totalQuantity})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
