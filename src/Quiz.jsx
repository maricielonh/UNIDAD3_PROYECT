import preguntasData from "./data/preguntas.json";
import "./Quiz.css";
import React, { useState } from "react";


export default function Quiz() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [terminado, setTerminado] = useState(false);

    const manejarRespuesta = (indiceOpcion) => {
        const pregunta = preguntasData[preguntaActual];
        const nuevoPuntaje = puntaje + pregunta.puntaje[indiceOpcion];
        setPuntaje(nuevoPuntaje);

        if (preguntaActual + 1 < preguntasData.length) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            setTerminado(true);
        }
    };

    const reiniciarQuiz = () => {
        setPreguntaActual(0);
        setPuntaje(0);
        setTerminado(false);
    };

    if (terminado) {
        let mensaje = "";
        if (puntaje === 50) {
            mensaje = "🎉 ¡Eres una fanática del proyecto y lo conoces a la perfección!";
        } else if (puntaje > 25) {
            mensaje = "👏 ¡Sabes bastante sobre la página web!";
        } else {
            mensaje = "🤔 Parece que aún no conoces mucho del proyecto.";
        }

        return (
            <section className="quiz-section">
                <h2>🎯 Resultado Final</h2>
                <p><strong>Puntaje Obtenido:</strong> {puntaje} de 50</p>
                <p>{mensaje}</p>
                <button onClick={reiniciarQuiz}>🔁 Reintentar</button>
            </section>
        );
    }

    const pregunta = preguntasData[preguntaActual];

    return (
        <>
            <div className="container-quiz">
                <section className="quiz-section">

                    <h2>📝 Test sobre la Página Web del Proyecto</h2>
                    <p className="pregunta">{pregunta.pregunta}</p>

                    <div className="opciones-container">
                        {pregunta.opciones.map((opcion, index) => (
                            <button key={index} onClick={() => manejarRespuesta(index)}>
                                {opcion}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
