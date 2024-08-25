import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
        className="min-h-screen flex items-center justify-center bg-green-100"
      >
        <div className="container flex flex-col text-center">
          <h2>
            <b>CEREMONIA Y FIESTA</b>
          </h2>
          <p>
            “Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de
            tres hilos no se rompe fácilmente!”
          </p>
          <p>Eclesiastés 4:12 NVI</p>
          <p>
            Estamos muy felices y queremos compartir este momento con ustedes.
            Los invitamos a nuestra fiesta de casamiento el día Sabado 8 de
            febrero a las 19hs en
          </p>
          <b>LA QUINTA "LOS PINOS"</b>
          <p>Alejandro de Manzoni 2140, Virrey del Pino - Km 35</p>
          <a
            href="https://www.google.com/maps/place/Alejandro+de+Manzoni+2140,+B1763+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8060624,-58.643202,841m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bcc4a956f900b5:0xeb7809e9610c5a9!8m2!3d-34.8060668!4d-58.6406217!16s%2Fg%2F11h4b__qh5?authuser=0&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cómo llegar
          </a>
          <p>
            No olviden <a href="#asistencia">confirmar su presencia</a> al final
            de la invitación.
          </p>
        </div>
      </section>

      <section
        id="regalo"
        className="min-h-screen flex items-center justify-center bg-yellow-100"
      >
        <div className="text-center">
          <h2 className="text-3xl mb-4">REGALO</h2>
          <p>
            Su presencia en nuestra boda es el mejor regalo pero si desean
            colaborar con nuestra <b>Luna de Miel</b> o ayudarnos a terminar
            nuestro futuro <b>Hogar</b> pueden hacerlo a través de esta cuenta:
          </p>
          <button
            onClick={() => setShowCVU(!showCVU)}
            className="bg-blue-500 text-white px-4 py-2 rounded my-4"
          >
            {showCVU ? "Ocultar CVU" : "Mostrar CVU"}
          </button>
          {showCVU && (
            <div>
              <p>Banco saraza</p>
              <p>Nro de Cuenta: 00000000</p>
              <p>Cbu: 00000000000000</p>
              <p>Alias: saraza.saraza.saraza</p>
              <p>Titular: Gabriel Alejandro Ricardes</p>
              <p className="mt-2">¡Muchas Gracias!</p>
            </div>
          )}
        </div>
      </section>

      <section
        id="asistencia"
        className="min-h-screen flex items-center justify-center bg-red-100"
      >
        <div className="text-center">
          <h2 className="text-3xl mb-4">Asistencia</h2>
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ir al Formulario
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
