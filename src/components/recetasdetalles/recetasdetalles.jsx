import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import recipes from '../../data/recetas.json'
import './recetasdetalles.css'

export default function RecipeDetail() {
    const { enlace } = useParams()
    const navigate = useNavigate()

    const recipe = recipes.find(r => r.enlace == enlace)

    if (!recipe) {
        return (
        <section className="recipe-detail">
            <div className="recipe-detail-container">
                <p className="recipe-not-found">Receta no encontrada</p>
            </div>
        </section>
        )
    }

    return (
        <section className="recipe-detail">
            <div className="recipe-detail-container">

            {/* Botón volver */}
            <button onClick={() => navigate('/recetas')} className="recipe-back-btn">
                <FaArrowLeft />Volver
            </button>

            <h1 className="recipe-detail-title">{recipe.titulo}</h1>

            <div className="recipe-detail-tags">
                {recipe.tags.map(tag => (
                    <span key={tag} className="recipe-detail-tag">{tag}</span>
                ))}
            </div>

            <p className="recipe-detail-description">{recipe.descripcion}</p>

            <pre className="recipe-detail-content"><code>{recipe.contenido}</code></pre>

        </div>
        </section>
    )
}
