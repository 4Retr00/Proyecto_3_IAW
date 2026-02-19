import { Link } from 'react-router-dom'
import projectsData from '../../data/proyectos.json'
import './proyectos.css'

export default function Projects() {
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

      {/* Proyectos */}
      <section className="projects-page">
        <div className="projects-container">
          <h1 className="projects-title">Proyectos Laravel</h1>

          <div className="projects-grid">
            {projectsData.map(project => (
              <Link key={project.enlace} to={`/proyectos/${project.enlace}`} className="project-card">
                <h2 className="project-card-title">{project.titulo}</h2>
                <p className="project-card-description">{project.descripcion}</p>
                <p className="project-card-difficulty">Dificultad: {project.dificultad}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
