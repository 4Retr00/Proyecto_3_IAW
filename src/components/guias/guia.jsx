import guide from '../../data/guia.json'
import { Link } from 'react-router-dom'
import './guia.css'

export default function Guide() {
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

      {/* Contenido principal */}
        <section className="guide-page">
            <div className="guide-container">

                <h1 className="guide-title">Guía de Laravel</h1>

                <div className="guide-grid">
                    {guide.map(item => (
                        <Link key={item.enlace} to={`/guia/${item.enlace}`} className="guide-card">
                            <h2 className="guide-card-title">{item.titulo}</h2>
                            <p className="guide-card-description">{item.descripcion}</p>
                        </Link>
                        ))}
                </div>

            </div>
        </section>
    </div>
  )
}
