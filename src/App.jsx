import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "./Components/ItemDetail/ItemDetail.jsx";
import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const handlePurchase = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.success("¡Tu compra fue realizada con éxito!", {
      position: "top-center",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setCart([]); 
    localStorage.removeItem("cart");
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer greeting="Todos los productos 💄" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<CartWidget cart={cart} onPurchase={handlePurchase} />} />
        <Route path="*" element={<div className="pagError">Error 404: Página no encontrada</div>} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;



