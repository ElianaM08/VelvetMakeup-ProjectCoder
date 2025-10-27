import labial from '../assets/labialRojo.jpg'
import gloss from '../assets/gloss.jpg'
import paletaDorada from '../assets/paletaDorada.jpg'
import modelo from '../assets/mujerMaquillandose.jpg'
import '../pages/Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Velvet</h1>
          <p className="hero-text">
            Somos una empresa de maquillaje que busca resaltar tu belleza natural con productos de alta calidad.
            Nuestro compromiso es ofrecerte innovación, estilo y colores únicos.
          </p>
        </div>
      </section>

      <section className="productos">
        <div className="productos-layout">
          <div className="productos-titulo">
            <h3>Perfect Match</h3>
          </div>
          <div className="productos-grid">
            <div className='card'><img src={labial} alt="Labial" /></div>
            <div className='card'><img src={gloss} alt="Gloss" /></div>
            <div className='card'><img src={paletaDorada} alt="Paleta Dorada" /></div>
          </div>
        </div>
      </section>
      <section className="imagen-section">
        <img src={modelo} alt="Modelo" className="imagen-full" />
      </section>
      <section className="descripcion">
        <div className="descripcion-content">
          <h2>Descubrí tu mejor versión</h2>
          <p>
            En Velvet creemos que el maquillaje no es solo un producto, es una forma de expresión.
            Los labiales, paletas y glosses que te ofrecemos están diseñados para inspirar confianza y realzar tu estilo personal.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Velvet - Todos los derechos reservados</p>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </div>
  )
}

export default Home;
