import React from "react";

import logo from "../../assets/img/logostudio.png";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="/">
            <img className="w-auto h-20" src={logo} alt="" />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="#"
              className="mx-4 text-md lg:text-md text-gray-400  transition-colors duration-300 hover:text-white hover:scale-105 "
              aria-label="Terms"
            >
              <FormattedMessage id="footer.terms" defaultMessage="Services" />{" "}
            </a>
            <a
              href="#"
              className="mx-4 text-md lg:text-md text-gray-400  transition-colors duration-300 hover:text-white hover:scale-105 "
              aria-label="Reddit"
            >
              <FormattedMessage id="footer.privacy" defaultMessage="Services" />{" "}
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+523112666998&text=Hola,%20%20Necesito%20ayuda.%20%C2%BFPodr%C3%ADan%20brindarme%20soporte%20t%C3%A9cnico%20por%20favor?"
              className="mx-4 text-md lg:text-md text-gray-400  transition-colors duration-300 hover:text-white hover:scale-105 "
              aria-label="Reddit"
            >
              <FormattedMessage
                id="footer.support"
                defaultMessage="Soporte Tecnico"
              />{" "}
            </a>
            <a
              href="/FAQ"
              className="mx-4 text-md lg:text-md text-gray-400  transition-colors duration-300 hover:text-white hover:scale-105 "
              aria-label="Reddit"
            >
              <FormattedMessage
                id="footer.faq"
                defaultMessage="Preguntas Frecuentes"
              />{" "}
            </a>
          </div>
        </div>

        <hr className="my-6  border-gray-200 md:my-10" />

        <div className="flex flex-col justify-center sm:flex-row sm:justify-between">
          <p className="text-sm lg:text-lg text-gray-500">
            <FormattedMessage id="footer.copyright" defaultMessage="Services" />{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
