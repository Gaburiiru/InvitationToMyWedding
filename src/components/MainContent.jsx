import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import assets from "../assets/assets.js";

const MainContent = () => {
  const [showDate, setShowDate] = useState(false);
  const [showCVU, setShowCVU] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setShowDate(position > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        id="fecha"
        className="min-h-screen flex items-center justify-center bg-blue-300"
      >
        <div className="container flex flex-col text-center">
          <h2
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ¡Nos Casamos!
          </h2>
          <h3
            className="text-3xl text-white italic mt-2"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Gabo y Juani
            <FontAwesomeIcon icon={faHeart} className="ml-4" />
          </h3>
          <p
            className="text-xl text-white mt-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sábado 8 de Febrero
          </p>
        </div>
      </section>

      <section
        id="ubicacion"
        className="min-h-screen flex items-center justify-center bg-green-200"
      >
        <div className="container flex flex-col text-center space-y-4 mx-4">
          <div className="flex justify-center mb-4">
            <img src={assets.anillos} alt="anillos" className="w-24 mx-auto" />
          </div>

          <h2 className="text-lg font-semibold tracking-widest text-gray-800">
            CEREMONIA Y FIESTA
          </h2>

          <p className="italic text-gray-600">
            “Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de
            tres hilos no se rompe fácilmente!”
          </p>
          <p className="italic text-gray-600">Eclesiastés 4:12 NVI</p>

          <p className="text-gray-800">
            Estamos muy felices y queremos compartir este momento con ustedes.
            Los invitamos a nuestra fiesta de casamiento el día Sábado 8 de
            febrero a las 19hs en
          </p>

          <p className="font-semibold text-lg text-gray-800">
            LA QUINTA "LOS PINOS"
          </p>

          <p className="text-gray-700">
            Alejandro de Manzoni 2140, Virrey del Pino - Km 35
          </p>

          <a
            href="https://www.google.com/maps/place/Alejandro+de+Manzoni+2140,+B1763+Virrey+del+Pino,+Provincia+de+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 ease-in-out mx-auto"
          >
            Cómo llegar
          </a>

          {/* Recordatorio de asistencia */}
          <p className="text-gray-800">
            No olviden{" "}
            <a href="#asistencia" className="font-semibold underline">
              confirmar su presencia
            </a>{" "}
            al final de la invitación.
          </p>
        </div>
      </section>

      <section
        id="regalo"
        className="min-h-screen flex items-center justify-center bg-yellow-200"
      >
        <div className="text-center space-y-4 mx-4">
          <div className="flex justify-center mb-4">
            <img src={assets.regalo} alt="regalo" className="w-20 mx-auto" />
          </div>

          <h2 className="text-lg font-semibold tracking-widest text-gray-800">
            REGALO
          </h2>

          <p className="text-gray-800">
            Su presencia en nuestra boda es el mejor regalo, pero si desean
            colaborar con nuestra <b>Luna de Miel</b> o ayudarnos a terminar
            nuestro futuro <b>Hogar</b>, pueden hacerlo a través de esta cuenta:
          </p>

          <button
            onClick={() => setShowCVU(!showCVU)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 ease-in-out"
          >
            {showCVU ? "Ocultar CVU" : "Mostrar CVU"}
          </button>

          {showCVU && (
            <div className="mt-4 text-gray-800 space-y-2">
              <p>Banco Saraza</p>
              <p>Número de Cuenta: 00000000</p>
              <p>CBU: 00000000000000</p>
              <p>Alias: saraza.saraza.saraza</p>
              <p>Titular: Gabriel Alejandro Ricardes</p>
              <p className="mt-2 font-semibold">¡Muchas Gracias!</p>
            </div>
          )}
        </div>
      </section>

      <section
        id="asistencia"
        className="min-h-screen flex items-center justify-center bg-red-200"
      >
        <div className=" text-center space-y-6 text-white">
          <h2 className="uppercase text-4xl font-bold">LOS ESPERAMOS</h2>

          <p className="text-lg">
            Por favor confirmar asistencia por este medio. ¡Gracias!
          </p>

          <button
            onClick={() => setShowCVU(!showCVU)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 ease-in-out"
          >
            <a
              href="https://forms.gle/your--form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confirmar asistencia
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
