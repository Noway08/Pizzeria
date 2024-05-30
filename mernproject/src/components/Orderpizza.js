import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BiFoodTag } from "react-icons/bi";
import axios from "axios";
import Footer from "./Footer";

import { addToCart } from "../features/cartSlice";

function Orderpizza() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    // console.log(item);
    console.log(dispatch(addToCart(item)));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/buy")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container d-flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div
              width="900px"
              key={index}
              className=" d-flex  align-items-center ">
              <div
                className="mt-4 d-flex justify-content-evenly align-items-center border border-5 m-2 flex-wrap"
                style={{
                  width: "500px",
                  marginInline: "auto",
                  height: "250px",
                }}>
                <div className="row d-flex" style={{ width: "20%" }}>
                  <h5>{item.name}</h5>
                  <h6 className="text-center mb-5">
                    {item.type === "veg" ? (
                      <BiFoodTag className="text-success text-center" />
                    ) : (
                      <BiFoodTag className="text-danger text-center " />
                    )}
                  </h6>

                  <h6>Rs. {item.price}</h6>
                </div>
                <div
                  className="row d-flex my-4 "
                  style={{ width: "50%", fontSize: "12px" }}>
                  <p>{item.description}</p>
                  <p>
                    <b>Ingredients:</b> {item.ingredients.join(",")}
                  </p>
                  <p>
                    <b>Toppings:</b>
                    {item.topping.join(",")}
                  </p>
                </div>
                <div className="row" style={{ width: "29%" }}>
                  <img
                    src={item.image}
                    width="40px"
                    alt="pizza"
                    height="150px"
                  />
                  <button
                    className="mt-2 btn btn-warning mx-auto text-white"
                    style={{ width: "60%", height: "30px", fontSize: "12px" }}
                    onClick={() => handleClick(item)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="App text-warning bg-light">
        <Footer />
      </div>
    </div>
  );
}

export default Orderpizza;
