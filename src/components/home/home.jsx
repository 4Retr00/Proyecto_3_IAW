import { Link } from 'react-router-dom'
import { FaBookOpen, FaUtensils, FaProjectDiagram, FaArrowRight, FaCheckCircle, FaRocket, FaCode } from 'react-icons/fa'
import './home.css'

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header>
        <nav className="main-nav">
          <div className="nav-container">
            <Link to="/" className="brand">Laravel Guide</Link>

            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/guia" className="nav-link">Guía</Link>
              </li>
              <li className="nav-item">
                <Link to="/recetas" className="nav-link">Recetas</Link>
              </li>
              <li className="nav-item">
                <Link to="/proyectos" className="nav-link">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-link">Quiz</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home */}
      <main>
        <div className="home">
          <section className="home-hero">
            <div className="home-container">

              {/* Izquierda */}
              <div className="home-left">
                <span className="home-badge"><FaRocket />Laravel Guide 2026</span>

                <h1 className="home-title">Domina Laravel<span>de forma profesional</span></h1>

                <p className="home-description">
                  Laravel es un framework PHP moderno que permite desarrollar aplicaciones web de manera rápida y eficiente. 
                  Aquí encontrarás ejemplos, recetas y proyectos para aprender y practicar tus habilidades.
                </p>

                <div className="home-buttons">
                  <Link to="/guia" className="btn btn-primary">
                    <FaBookOpen />Explorar Guía<FaArrowRight />
                  </Link>

                  <Link to="/recetas" className="btn btn-secondary">
                    <FaUtensils />Ver Recetas
                  </Link>

                  <Link to="/proyectos" className="btn btn-outline">
                    <FaProjectDiagram />Proyectos
                  </Link>
                </div>
              </div>

              {/* Derecha */}
              <div className="home-right">
                <div className="feature-card">
                  <FaCheckCircle className="feature-icon indigo" />
                  <div>
                    <h3>Contenido actualizado</h3>
                    <p>Laravel 11/12 y mejores prácticas modernas.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <FaCode className="feature-icon emerald" />
                  <div>
                    <h3>Recetas prácticas</h3>
                    <p>Soluciones listas para copiar y adaptar.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <FaRocket className="feature-icon amber" />
                  <div>
                    <h3>Proyectos reales</h3>
                    <p>Ideas para portfolio o clientes reales.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Proyecto de aprendizaje - Laravel + React • 2026</p>
      </footer>
    </div>
  )
}
