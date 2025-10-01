import CardWidget from "./CardWidget";
import logo from "../assets/Velvet Logo.jpg"

function Navbar({ setPage, cartCount = 0 }) {
  return (
    <header>
      <nav className="navbar">
        <img
          src ={logo}
          className="logo"
          role="button"
          tabIndex={0}
          onClick={() => setPage && setPage("home")}
          onKeyDown={(e) => { if (e.key === "Enter") setPage && setPage("home"); }}
        />
        
        <ul className="nav-links">
          <li><button className="nav-btn" onClick={() => setPage && setPage("labiales")}>Labiales</button></li>
          <li><button className="nav-btn" onClick={() => setPage && setPage("gloss")}>Gloss</button></li>
          <li><button className="nav-btn" onClick={() => setPage && setPage("paletas")}>Paletas de sombras</button></li>
          <li><button className="nav-btn" onClick={() => setPage && setPage("combos")}>Combos</button></li>
        </ul>

        <CardWidget count={cartCount} onClick={() => setPage && setPage("carrito")} />
      </nav>
    </header>
  );
}

export default Navbar;
