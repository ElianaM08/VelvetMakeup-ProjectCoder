import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "./Components/ItemDetail/ItemDetail.jsx";
import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Context/CartContext.jsx";

function App() {
  const [setCart] = useState([]);



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
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer greeting="Todos los productos 💄" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/cart" element={<CartWidget onPurchase={handlePurchase} />} />
          <Route path="*" element={<div className="pagError">Error 404: Página no encontrada</div>} />
        </Routes>

        <ToastContainer />
      </CartProvider>

    </BrowserRouter>

  );
}

export default App;



