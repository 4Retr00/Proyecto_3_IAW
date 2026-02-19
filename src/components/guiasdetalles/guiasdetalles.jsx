import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import guide from '../../data/guia.json'
import './guiasdetalles.css'

export default function GuideDetail() {
  const { enlace } = useParams()
  const navigate = useNavigate()

  // Buscar tema directamente
  const topic = guide.find(t => t.enlace == enlace)

  if (!topic) {
    return (
      <section className="guide-detail">
        <div className="guide-detail-container">
          <p className="guide-not-found">Tema no encontrado</p>
        </div>
      </section>
    )
  }

  return (
    <section className="guide-detail">
      <div className="guide-detail-container">

        {/* Botón volver */}
        <button onClick={() => navigate(-1)} className="guide-back-btn">
          <FaArrowLeft /> Volver
        </button>

        <h1 className="guide-detail-title">{topic.titulo}</h1>

        <p className="guide-detail-description">{topic.descripcion}</p>

        <pre className="guide-detail-content">
          <code>{topic.contenido}</code>
        </pre>

      </div>
    </section>
  )
}
