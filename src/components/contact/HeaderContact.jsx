import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import contactImage from "../../assets/img/contact.jpg";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="flex flex-col min-h-screen bg-black/60 pt-16">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto lg:flex-row justify-center items-center">
          <div className="flex-1 lg:w-1/2 lg:mr-6">
            <div className="mb-12 text-center">
              <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                <FormattedMessage id="contact.title" defaultMessage="Title" />
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                <FormattedMessage
                  id="contact.subtitle"
                  defaultMessage="Title"
                />
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-1 justify-items-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <a href="mailto:contact@cazarez.studio" className="block">
                  <div className="w-12 h-12 bg-gray-900/80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                </a>
                <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                  Email{" "}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <FormattedMessage
                    id="contact.emaildesc"
                    defaultMessage="Title"
                  />
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <a href="tel:+523112666998" className="block">
                  <div className="w-12 h-12 bg-gray-900/80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                </a>
                <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                  <FormattedMessage id="contact.phone" defaultMessage="Title" />
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <FormattedMessage
                    id="contact.phonedesc"
                    defaultMessage="Title"
                  />
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <a href={`https://wa.me/523112666998`} className="block">
                  <div className="w-12 h-12 bg-gray-900/80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <FaWhatsapp className="w-8 h-8 text-white" />
                  </div>
                </a>
                <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                  WhatsApp
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <FormattedMessage
                    id="contact.whatsapp"
                    defaultMessage="Title"
                  />
                </p>
              </div>
              <div className="mt-13 lg:mr-4 lg:mt-10 text-center">
                {/* Redes sociales */}
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                  <FormattedMessage
                    id="contact.social"
                    defaultMessage="Title"
                  />
                </h3>
                <div className="flex mt-4 -mx-2 justify-center">
                  <a
                    className="mx-2 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.instagram.com/kevin.gx/"
                  >
                    <FaInstagram className="w-10 h-10" />
                  </a>
                  <a
                    className="mx-2 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.linkedin.com/in/kevinguerrax/"
                  >
                    <FaLinkedin className="w-10 h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
