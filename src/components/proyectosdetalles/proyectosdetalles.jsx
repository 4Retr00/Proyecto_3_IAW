import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import projectsData from "../../data/proyectos.json"
import './proyectosdetalles.css'

export default function ProjectDetail() {
  const { enlace } = useParams()
  const navigate = useNavigate()

  const project = projectsData.find(p => p.enlace == enlace)

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail-container">
          <p className="project-not-found">Proyecto no encontrado</p>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">

        <button onClick={() => navigate('/proyectos')} className="project-back-btn">
          <FaArrowLeft /> Volver
        </button>

        <h1 className="project-detail-title">{project.titulo}</h1>

        <p className="project-detail-description">{project.descripcion}</p>
        <p><strong>Objetivo:</strong> {project.objetivo}</p>
        <p><strong>Módulos Laravel: </strong> {project.modulos.join(', ')}</p>
        <p><strong>Stack:</strong> {project.stack}</p>
        <p><strong>Dificultad:</strong> {project.dificultad}</p>

        <div className="project-detail-images">
          {project.images.map((img, i) => (<img key={i} src={`../assets/img/${img}`} alt={project.titulo} />))}
        </div>
      </div>
    </section>
  )
}
