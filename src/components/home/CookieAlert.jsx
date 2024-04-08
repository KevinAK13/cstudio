import React, { useState, useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext.jsx";

export default function CookieAlert() {
  const [isOpen, setIsOpen] = useState(true);
  const idioma = useContext(langContext);

  useEffect(() => {
    // Verificar si la alerta ya ha sido cerrada previamente
    const isCookieAccepted = localStorage.getItem("cookieAccepted");
    if (isCookieAccepted === "true") {
      setIsOpen(false);
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleClose = () => {
    setIsOpen(false);
    // Marcar que el usuario ha aceptado las cookies en el almacenamiento local
    localStorage.setItem("cookieAccepted", "true");
  };

  return (
    <>
      {isOpen && (
        <div className="cookie-alert fixed top-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-sm shadow-md transition-opacity duration-500 ease-in-out">
          <strong className="block font-semibold text-lg mb-2">
            <FormattedMessage id="cookie.title" />
          </strong>
          <p className="mt-1 mb-4">
            <FormattedMessage id="cookie.content" />
          </p>
          <div className="flex lg:justify-end sm:justify-center mt-2">
            <button
              className="mr-8 text-white text-lg transform hover:scale-105 transition duration-500 ease-in-out"
              onClick={handleClose}
            >
              <FormattedMessage id="cookie.accept" />
            </button>
            <button
              className="text-white text-lg transform hover:scale-105 transition duration-500 ease-in-out"
              onClick={handleClose}
            >
              <FormattedMessage id="cookie.decline" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
