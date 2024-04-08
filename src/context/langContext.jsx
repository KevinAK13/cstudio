import React, { useState, useEffect } from "react";
import enUS from "../lang/en-US.json";
import esMX from "../lang/es-MX.json";
import { IntlProvider } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [locale, setLocale] = useState("en-US");
  const [messages, setMessages] = useState(enUS);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "es-MX") {
      setLocale("es-MX");
      setMessages(esMX);
    } else {
      setLocale("en-US");
      setMessages(enUS);
    }
  }, []);

  const establecerLenguaje = (lenguaje) => {
    if (lenguaje === "es-MX") {
      setLocale("es-MX");
      setMessages(esMX);
      localStorage.setItem("lang", "es-MX");
    } else {
      setLocale("en-US");
      setMessages(enUS);
      localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <langContext.Provider value={{ establecerLenguaje }}>
      <AnimatePresence>
        <motion.div
          key={locale} // Agrega la variable locale como parte de la clave
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <IntlProvider locale={locale} messages={messages}>
            {children}
          </IntlProvider>
        </motion.div>
      </AnimatePresence>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
