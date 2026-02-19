import { useState } from 'react'
import { Link } from 'react-router-dom'
import recipesData from '../../data/recetas.json'

import './recetas.css'

export default function Recipes() {

    const recipes = recipesData

    const [search, setSearch] = useState('')
    const [selectedTag, setSelectedTag] = useState('')

    // Filtrar recetas
    const filteredRecipes = recipes.filter(recipe => {
        const matchesText = recipe.titulo.toLowerCase().includes(search.toLowerCase()) 
        const matchesTag = selectedTag == '' || recipe.tags.includes(selectedTag)
        return matchesText && matchesTag
    })

    // Obtener los tags
        const allTags = []

        recipes.forEach(recipe => {
        recipe.tags.forEach(tag => {
            if (!allTags.includes(tag)) {
            allTags.push(tag)
            }
        })
        })


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
            <section className="recipes">
                <div className="recipes-container">

                <h1 className="recipes-title">Recetas rápidas (Cookbook)</h1>

                {/* Filtros */}
                <div className="recipes-filters">
                    <input type="text" placeholder="Buscar receta..." value={search} onChange={(e) => setSearch(e.target.value)} className="recipes-input"/>

                    <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="recipes-select">
                    <option value="">Todos los tags</option>
                    {allTags.map(tag => (<option key={tag} value={tag}>{tag}</option>))}
                    </select>
                </div>

                {/* recetas */}
                <div className="recipes-grid">
                    {filteredRecipes.length == 0 ? (<p className="recipes-empty">No hay recetas</p>) : (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.enlace} className="recipe-card">

                        <h3 className="recipe-title">{recipe.titulo}</h3>

                        <p className="recipe-description">{recipe.descripcion}</p>

                        <div className="recipe-tags">
                            {recipe.tags.map(tag => (<span key={tag} className="recipe-tag">{tag}</span>))}
                        </div>

                        <Link to={`/recetas/${recipe.enlace}`} className="recipe-link">Ver receta → </Link>
                        </div>
                    ))
                    )}
                </div>

                </div>
            </section>
        </div>
    )
}
