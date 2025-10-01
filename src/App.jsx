import { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home";
import "./index.css";
import labialRojo from "./assets/labialRojo.jpg";
import gloss from "./assets/gloss.jpg";
import paleta from "./assets/paletaDorada.jpg";
import labialNude from "./assets/labiales.jpg";
import glossClarito from "./assets/glossClarito.jpg";
import paletaColores from "./assets/paletaColores.jpg";
import combo3 from "./assets/combo3.jpg";
import comboNude from "./assets/comboNude.jpg";

function App() {
  const [page, setPage] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (qty = 1) => {
    setCartCount((prev) => prev + qty);
  };

  const labiales = [
    { id: 1, name: "Labial - Rojo Intenso", price: 1200, img: labialRojo },
    { id: 2, name: "Labial- Nude", price: 1150, img: labialNude },
  ];

  const glosses = [
    { id: 1, name: "Gloss Brillante", price: 1000, img: gloss },
    { id: 2, name: "Gloss Rosa", price: 1100, img: glossClarito  },
  ];

  const paletas = [
    { id: 1, name: "Paleta Dorada", price: 2500, img: paleta },
    { id: 2, name: "Paleta Smokey Eyes", price: 2600, img: paletaColores },
  ];

  const combos = [
    { id: 1, name: "Combo Labial + rubor + delineador", price: 2000, img: combo3 },
    { id: 2, name: "Combo Completo", price: 5000, img: comboNude },
  ];

  return (
    <>
      <Navbar setPage={setPage} cartCount={cartCount} />

      {page === "home" && <Home />}

      {page === "labiales" && (
        <ItemListContainer
          greeting="Labiales"
          onAddToCart={handleAddToCart}
          products={labiales}
        />
      )}

      {page === "gloss" && (
        <ItemListContainer
          greeting="Gloss"
          onAddToCart={handleAddToCart}
          products={glosses}
        />
      )}

      {page === "paletas" && (
        <ItemListContainer
          greeting="Paletas de Sombras"
          onAddToCart={handleAddToCart}
          products={paletas}
        />
      )}

      {page === "combos" && (
        <ItemListContainer
          greeting="Combos Especiales"
          onAddToCart={handleAddToCart}
          products={combos}
        />
      )}

      {page === "carrito" && (
        <main style={{ padding: 20 }}>
          <h2>Tu carrito</h2>
          <p>Tenés {cartCount} artículo/s en el carrito.</p>
        </main>
      )}
    </>
  );
}

export default App;


