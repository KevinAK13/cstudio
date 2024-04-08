import React, { useState, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import flagMexico from "../../assets/img/flags/mexicoflag.png";
import flagUSA from "../../assets/img/flags/usaflag.png";
import { langContext } from "../../context/langContext"; // Importa el contexto o la función necesaria para cambiar el idioma
import langIcon from "../../assets/img/icons/lang.png"; // Importa la imagen de lang.png

const LanguagePopover = () => {
  const idioma = useContext(langContext); // Accede al contexto para cambiar el idioma

  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef(null);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  // Función para cambiar el idioma utilizando el contexto
  const handleFlagClick = (lang) => {
    idioma.establecerLenguaje(lang);
    setIsOpen(false); // Cierra el popover después de seleccionar un idioma
  };

  // Efecto para cerrar el popover cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={popoverRef}>
      <div
        className="bg-transparent rounded-full p-2 cursor-pointer"
        onClick={togglePopover}
      >
        <img
          src={langIcon}
          alt="Language Icon"
          className="lg:w-7 lg:h-7 w-5 h-5"
        />{" "}
        {/* Usa la imagen lang.png como icono */}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-10 right-0 bg-transparent rounded-xl overflow-hidden"
        >
          <button
            className=" w-full p-2 flex items-center hover:bg-gray-900/20 transition duration-500"
            onClick={() => handleFlagClick("es-MX")}
          >
            <img src={flagMexico} alt="Mexico Flag" className="w-4 h-3 mr-2" />
          </button>
          <button
            className="w-full p-2 flex items-center hover:bg-gray-900/20 transition duration-500"
            onClick={() => handleFlagClick("en-US")}
          >
            <img src={flagUSA} alt="USA Flag" className="w-4 h-3 mr-2" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LanguagePopover;
