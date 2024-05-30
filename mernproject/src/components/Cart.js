import React, { useEffect } from "react";
import Placed from "./Placed";
import { useSelector, useDispatch } from "react-redux";
import cartReducer, { removeItem } from "../features/cartSlice";
import {
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/cartSlice";
function Cart() {
  const { cartItems, totalQuantity, totalPrice, ingredients, total } =
    useSelector((state) => state.allCart);
  console.log(ingredients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);
  return (
    <div>
      {cartItems == 0 ? (
        <h1
          className="text-center"
          style={{
            marginTop: "200px",
            opacity: 0.5,
          }}>
          Your cart is Empty
        </h1>
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                  </div>
                  <div className="card-body">
                    {cartItems.map((data) => {
                      return (
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light">
                              <img
                                src={data.image}
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />

                              <div className="mask"></div>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{data.name}</strong>
                            </p>

                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-tooltip-init
                              title="Remove item"
                              onClick={() => dispatch(removeItem(data.id))}>
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}>
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 me-2"
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(data.id))
                                }>
                                <i className="fas fa-minus"></i>
                              </button>

                              <div data-mdb-input-init className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={data.quantity}
                                  type="number"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  for="form1"></label>
                              </div>

                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 ms-2"
                                onClick={() =>
                                  dispatch(increaseItemQuantity(data.id))
                                }>
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>Rs. {data.price}</strong>
                            </p>
                          </div>
                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total Quantity
                        <span>{totalQuantity}</span>
                      </li>
                      <strong>Ingredients</strong>
                      {ingredients.map((data) => {
                        return (
                          <li
                            key={data.id}
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                              <label>
                                <img
                                  src={data.itemImg}
                                  alt="pizza"
                                  width="50px"
                                  height="60px"
                                />
                              </label>
                            </div>
                            <div>
                              <label>{data.tname}</label>
                            </div>
                            <span>
                              <label>{data.itemPrice}</label>
                            </span>
                          </li>
                        );
                      })}

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>{totalPrice + total}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block">
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Cart;
