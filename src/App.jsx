import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "./Components/ItemDetail/ItemDetail.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Context/CartContext.jsx";
import Cart from "./Components/Cart/Cart.jsx";

function App() {



  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer greeting="Todos los productos 💄" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<div className="pagError">Error 404: Página no encontrada</div>} />
        </Routes>

        <ToastContainer />
      </CartProvider>

    </BrowserRouter>

  );
}

export default App;



