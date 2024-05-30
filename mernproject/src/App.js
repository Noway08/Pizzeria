import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orderpizza from "./components/Orderpizza";
import Custompizza from "./components/Buildpizza";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cart from "./components/Cart";
import placed from "./components/Placed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        {/* <About /> */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Orderpizza" element={<Orderpizza />} />
          <Route path="/Custompizza" element={<Custompizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placed" element={<placed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
