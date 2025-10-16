import React from "react";
import "./MIVI.css"


const MIVI = () => {
  return (
    <>
      {/* 🌱 Sección Misión */}
      <div className="bg-pink-200">
        <section className="py-16 bg-white scroll-mt-24 ">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 tracking-tight">
              Nuestra Misión
            </h2>

            <div className="flex justify-center ">
              <article className="bg-blue-200 rounded-2xl shadow-xl p-8 max-w-3xl transition-transform duration-500 hover:scale-105 float ">
                <p className="text-center text-gray-600 leading-relaxed text-lg font-sans">
                  Nuestra misión es crear soluciones digitales innovadoras que inspiren y generen un
                  impacto positivo en la sociedad, conectando personas y potenciando sus ideas a través
                  de la tecnología.
                </p>

                <p className="text-center text-gray-700 italic mt-6 text-lg font-light">
                  “Buscamos transformar desafíos en oportunidades, siempre con responsabilidad y pasión
                  por lo que hacemos.”
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 🚀 Sección Visión */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 tracking-tight">
              Nuestra Visión
            </h2>

            <div className="flex justify-center ">
              <article className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl transition-transform duration-500 hover:scale-105 float">
                <p className="text-center text-gray-600 leading-relaxed text-lg font-sans">
                  Nuestra visión es ser referentes en innovación tecnológica, reconocidos por nuestro
                  impacto social y por impulsar un futuro sostenible en el que la creatividad y la
                  tecnología vayan de la mano.
                </p>

                <p className="text-center text-gray-700 italic mt-6 text-lg font-light">
                  “Queremos ser el puente entre la tecnología y las personas, generando un cambio real
                  en sus vidas.”
                </p>
              </article>
            </div>
          </div>
        </section>






      </div>

    </>
  );
};

export default MIVI;
