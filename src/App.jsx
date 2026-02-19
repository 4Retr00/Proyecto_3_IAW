import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/home/home.jsx'
import Guias from './components/guias/guia.jsx'
import GuiasDetalles from './components/guiasdetalles/guiasdetalles.jsx'
import Recetas from './components/recetas/recetas.jsx'
import RecetasDetalles from './components/recetasdetalles/recetasdetalles.jsx'
import Proyectos from './components/proyectos/proyectos.jsx'
import ProyectosDetalles from './components/proyectosdetalles/proyectosdetalles.jsx'
import Quiz from './components/quiz/quiz.jsx'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guia" element={<Guias />} />
          <Route path="/guia/:enlace" element={<GuiasDetalles />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/recetas/:enlace" element={<RecetasDetalles />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:enlace" element={<ProyectosDetalles />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<div className="notfound">404 - No encontrado</div>}/>
        </Routes>
    </BrowserRouter>
  )
}
