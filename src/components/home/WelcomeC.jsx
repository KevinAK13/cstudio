import React, { useState, useRef, useEffect, useContext } from "react";
import bg from "../../assets/video/bg.mp4";
import flagMexico from "../../assets/img/flags/mexicoflag.png";
import flagUSA from "../../assets/img/flags/usaflag.png";
import logostudio from "../../assets/img/logostudio.png";
import igicon from "../../assets/img/icons/igicon.png";
import lkicon from "../../assets/img/icons/lkicon.png";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext.jsx";

export default function WellcomeC() {
  const idioma = useContext(langContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSocialPopoverOpen, setIsSocialPopoverOpen] = useState(false);

  const popoverRef = useRef(null);
  const socialPopoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
      if (
        socialPopoverRef.current &&
        !socialPopoverRef.current.contains(event.target)
      ) {
        setIsSocialPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const toggleSocialPopover = () => {
    setIsSocialPopoverOpen(!isSocialPopoverOpen);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <div className="main h-screen w-screen ">
        <div className="overlay h-screen w-screen "></div>
        <video src={bg} autoPlay loop muted playsInline preload="auto" />
        <div className="content animate-fadeIn">
          <div className="mx-auto max-w-screen-xl text-center">
            <div className="">
              <img
                src={logostudio}
                alt="Logo Studio"
                className="mx-auto w-64 md:w-96 lg:w-96 h-auto"
              />
            </div>
            <h1 className="mb-4 mt-8 text-4xl font-extralight tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              <FormattedMessage id="app.phrase" />
            </h1>
            <div className="hidden sm:block">
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                <FormattedMessage id="app.title" />
              </p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/home"
                className="inline-flex justify-center items-center py-3 px-5 text-center text-2xl text-gray-400 transition hover:transform hover:scale-110 hover:text-white duration-500 uppercase"
              >
                <FormattedMessage id="app.welcome" defaultMessage="Home" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-4 left-4" ref={popoverRef}>
            <div className="relative">
              <button
                className="mx-2 text-2xl transition duration-500 ease-in-out text-gray-300 hover:transform hover:scale-110"
                onClick={togglePopover}
              >
                <FormattedMessage
                  id="app.langselect"
                  defaultMessage="Language"
                />
              </button>
              <div
                className={`absolute left-0 bottom-full mt-2 py-2 w-48 bg-transparent text-white shadow-lg transition-all duration-300 ease-in-out ${
                  isPopoverOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                <button
                  className="flex items-center w-full px-2 py-1 hover:bg-gray-900 transition duration-500"
                  onClick={() => idioma.establecerLenguaje("es-MX")}
                >
                  <img
                    src={flagMexico}
                    alt="Mexico Flag"
                    className="w-4 h-3 mr-2"
                  />
                  Español - México
                </button>
                <button
                  className="flex items-center w-full px-2 py-1 hover:bg-gray-900 transition duration-500"
                  onClick={() => idioma.establecerLenguaje("en-US")}
                >
                  <img src={flagUSA} alt="USA Flag" className="w-4 h-3 mr-2" />
                  English - USA
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4" ref={socialPopoverRef}>
            <div className="relative">
              <button
                className="mx-2 text-2xl transition duration-500 ease-in-out text-gray-300 hover:transform hover:scale-110"
                onClick={toggleSocialPopover}
              >
                Social
              </button>
              <div
                className={`absolute right-0 bottom-full mb-2 py-2 w-48 bg-transparent text-white shadow-lg transition-all duration-300 ease-in-out ${
                  isSocialPopoverOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                <div className="flex flex-col">
                  <a
                    href="https://www.instagram.com/kevin.gx/"
                    className="flex items-center w-full px-2 py-1 hover:bg-gray-900 transition duration-500"
                  >
                    <img
                      src={igicon}
                      alt="Instagram Icon"
                      className="w-4 h-4 mr-2"
                    />
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevinguerrax/"
                    className="flex items-center w-full px-2 py-1 hover:bg-gray-900 transition duration-500"
                  >
                    <img
                      src={lkicon}
                      alt="LinkedIn Icon"
                      className="w-4 h-4 mr-2"
                    />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
