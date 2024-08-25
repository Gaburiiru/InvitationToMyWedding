import React, { useEffect, useState } from "react";

const Header = () => {
  const [showDate, setShowDate] = useState(false);

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
    <header className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="#ubicacion">
          Ubicación
        </a>
        <a href="#regalo">
          Regalo
        </a>
        <a href="#asistencia">
          Asistencia
        </a>
      </div>
      {showDate && (
        <div  id="scrollDate" className="text-sm">
          <a href="#fecha">8 de Febrero, 2025</a>
        </div>
      )}
    </header>
  );
};

export default Header;
