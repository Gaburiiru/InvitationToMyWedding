import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/assets.js";




const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCVU, setShowCVU] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1550155864-3033f844da36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybGZyaWVuZHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1511519620772-8ce30462884f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555516573-f60567b82fed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxmcmllbmR8ZW58MHx8MHx8fDA%3D',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, [handleNext]);


  return (
    <div>
      {/* Sección de "Nos Casamos" */}
      <section
        id="fecha"
        className="min-h-screen flex items-center justify-center bg-gray-800 relative"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${assets.fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        ></div>
        <div className="container flex flex-col text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ¡Nos Casamos!
          </h2>
          <h3 className="text-2xl md:text-3xl text-white italic mt-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Gabo y Juani
            <FontAwesomeIcon icon={faHeart} className="ml-2" />
          </h3>
          <p className="text-lg md:text-xl text-white mt-2">
            Sábado 8 de Febrero
          </p>
        </div>
      </section>

      {/* Sección de Ubicación */}
      <section
        id="ubicacion"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50  space-y-6 lg:flex-row-reverse lg:items-center lg:space-y-0 lg:space-x-12 lg:px-16"
      >
        {/* Contenedor del texto */}
        <div className="w-full max-w-lg text-center lg:text-center lg:w-1/2 space-y-4 order-1 lg:order-none">
          <img
            src={assets.anillosD}
            alt="anillos"
            className="w-25 mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            CEREMONIA Y FIESTA
          </h2>
          <p className="italic text-gray-600">
            “Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de
            tres hilos no se rompe fácilmente!”
          </p>
          <p className="text-gray-800">
            Los esperamos el Sábado 8 de febrero a las 19hs en
            <b className="block mt-2 text-lg">LA QUINTA "LOS PINOS"</b>
          </p>
          <p className="text-gray-700">
            Alejandro de Manzoni 2140, Virrey del Pino - Km 35
          </p>
          <a
            href="https://www.google.com/maps/place/Alejandro+de+Manzoni+2140,+B1763+Virrey+del+Pino,+Provincia+de+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out space-x-2 mt-4"
            style={{ gap: "0.5rem" }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            <span>Cómo llegar</span>
          </a>
        </div>

        {/* Contenedor del video */}
        <div className="w-full max-w-lg lg:w-1/2 order-2 lg:order-none">
          <video
            className="w-full h-64 lg:h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={assets.chinchinVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </section>

      {/* Sección de Regalo */}
      <section
      id="regalo"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8"
    >
      {/* Carrusel de fotos estilo Polaroid */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
        <div className="relative w-80 h-150 bg-white shadow-lg p-6 rounded-lg flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Foto ${currentIndex + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
          
        </div>
      </div>

      {/* Contenido de regalo */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <img src={assets.regalo} alt="regalo" className="w-16 mx-auto lg:mx-0" />
        <h2 className="text-lg font-semibold tracking-widest text-gray-800">
          REGALO
        </h2>
        <p className="text-gray-800">
          Si desean colaborar con nuestra <b>Luna de Miel</b> o ayudarnos con
          nuestro <b>Hogar</b>, pueden hacerlo aquí:
        </p>
        <button
          onClick={() => setShowCVU(!showCVU)}
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out space-x-2 mt-4"
        >
          {showCVU ? 'Ocultar CVU' : 'Mostrar CVU'}
        </button>
        {showCVU && (
          <div className="mt-4 text-gray-800 space-y-2 text-center lg:text-left">
            <p>Banco Galicia</p>
            <p>Alias: gricardes.ppay</p>
            <p>0000076500000007487024</p>
            <p>Titular: Gabriel Alejandro Ricardes</p>
          </div>
        )}
      </div>
    </section>

      {/* Confirmación */}
      <section
        id="asistencia"
        className="min-h-screen flex flex-col items-center justify-center bg-red-200 px-4 py-8 text-white"
      >
        <h2 className="uppercase text-3xl font-bold">LOS ESPERAMOS</h2>
        <p className="text-lg">
          Confirmen asistencia por este medio. ¡Gracias!
        </p>
        <a
          href="https://forms.gle/your--form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out space-x-2 mt-4"
        >
          Confirmar asistencia
        </a>
      </section>
    </div>
  );
};

export default MainContent;
