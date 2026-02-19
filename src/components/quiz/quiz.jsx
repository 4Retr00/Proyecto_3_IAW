import { Link } from 'react-router-dom'
import { useState } from "react"
import preguntas from "../../data/quiz.json"
import "./quiz.css"

export default function Quiz() {

    const [current, setCurrent] = useState(0)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    const handleAnswer = (index) => {
        if (index == preguntas[current].correct) {
            setScore(score + 1)
        }

    const next = current + 1

    if (next < preguntas.length) {
        setCurrent(next)
        } else {
        setFinished(true)
        }
    }

    const restartQuiz = () => {
        setCurrent(0)
        setScore(0)
        setFinished(false)
    }

    return (

        <div>
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

            <section className="quiz">
                <div className="quiz-container">

                    <h1 className="quiz-title">Quiz de Laravel</h1>

                    {finished ? (
                        <div className="quiz-result">
                            <h2>Resultado final</h2>
                            <p>Has acertado {score} de {preguntas.length} preguntas</p>

                            <button onClick={restartQuiz} className="quiz-btn">Reintentar</button>
                        </div>
                        ) : (
                        <div className="quiz-question">

                            <h2>Pregunta {current + 1} / {preguntas.length}</h2>

                            <p className="quiz-text">{preguntas[current].pregunta}</p>

                            <div className="quiz-options">
                                {preguntas[current].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswer(index)} className="quiz-option"> {option}</button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>

        </div>
    )
}
