import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addIngredients } from "../features/cartSlice";
import { cartTotal } from "../features/cartSlice";
import Footer from "./Footer";

function Custompizza() {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleCheckboxChange = (user, itemId, tname, itemPrice, itemImg) => {
    const isSelected = selectedItems.some((item) => item.itemId === itemId);

    if (isSelected) {
      // Item is already selected, remove it
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item.itemId !== itemId)
      );
      setTotal((prevTotal) => prevTotal - itemPrice);
    } else {
      // Item is not selected, add it
      setSelectedItems((prevItems) => [
        ...prevItems,
        { itemId, tname, itemPrice, itemImg },
      ]);
      setTotal((prevTotal) => prevTotal + itemPrice);
    }
  };

  const buildPizza = () => {
    // Dispatch action to add selected ingredients to Redux store
    console.log(dispatch(addIngredients(selectedItems)));
    console.log(dispatch(cartTotal(total)));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/buy/custompizza")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div>
        <p className="mt-2">
          Pizzeria now gives options to build your own pizza. Customize your
          pizza by choosing ingredients from the list given below.
        </p>
        <div className="container" style={{ width: "500px", height: "40px" }}>
          <table className="table table-bordered table-striped">
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="text-center">
                    <img
                      src={user.image}
                      alt="toppings"
                      width="50px"
                      height="40px"
                      style={{ marginTop: "6px" }}
                    />
                  </td>
                  <td className="d-flex">
                    <p style={{ marginTop: "9px" }}>
                      <b className="m-2">{user.tname}</b>
                      <b>Rs.{user.price}</b>
                    </p>
                  </td>
                  <td>
                    <label style={{ marginTop: "7px" }}>
                      <input
                        type="checkbox"
                        checked={selectedItems.some(
                          (item) => item.itemId === user.id
                        )}
                        className="m-2"
                        onClick={() =>
                          handleCheckboxChange(
                            user,
                            user.id,
                            user.tname,
                            user.price,
                            user.image
                          )
                        }
                      />
                      Add
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ width: "22.9%" }}>
            <h5>Total Cost: Rs.{total}</h5>
          </div>
          <button
            className="btn btn-dark text-warning mx-auto"
            style={{ marginLeft: "30px" }}
            onClick={buildPizza}>
            Build Your Pizza
          </button>
          <div className="App text-warning bg-light m-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custompizza;
