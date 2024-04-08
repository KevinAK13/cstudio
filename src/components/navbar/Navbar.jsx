import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/img/logostudio.png";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [color, setColor] = useState("rgba(0, 0, 0, 0)");
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    const changeColor = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 150) {
        setColor("rgba(transparent)"); // Un poco más oscuro y aún transparente
        setTextColor("#ffffff");
      } else {
        setColor("rgba(0, 0, 0, 0)"); // Transparente
        setTextColor("#ffffff");
      }
    };

    const throttledChangeColor = throttle(changeColor, 200);
    window.addEventListener("scroll", throttledChangeColor);

    return () => {
      window.removeEventListener("scroll", throttledChangeColor);
    };
  }, []);

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  return (
    <div
      style={{
        backgroundColor: color,
        backdropFilter: color !== "rgba(0, 0, 0, 0)" ? "blur(10px)" : "none",
        borderBottomLeftRadius: "20px", // Radio de borde para la esquina inferior izquierda
        borderBottomRightRadius: "20px", // Radio de borde para la esquina inferior derecha
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        {" "}
        {/* Cambiado el padding de p-4 a p-2 */}
        <a href="/home">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "150px",
              height: "auto",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
            className="hover:scale-105"
          />
        </a>
        <ul style={{ color: textColor }} className="hidden sm:flex">
          <li className="text-gray-300 px-2 uppercase text-lg hover:text-white hover:scale-105 duration-300">
            {" "}
            {/* Cambiado el padding de p-4 a px-2 */}
            <a href="/services">
              <FormattedMessage
                id="navbar.services"
                defaultMessage="Services"
              />
            </a>
          </li>
          <li className="text-gray-300 px-2 uppercase text-lg hover:text-white hover:scale-105 duration-300">
            {" "}
            {/* Cambiado el padding de p-4 a px-2 */}
            <a href="/about">
              <FormattedMessage id="navbar.aboutus" defaultMessage="About Us" />
            </a>{" "}
          </li>
          <li className="text-gray-300 px-2 uppercase text-lg hover:text-white hover:scale-105 duration-300">
            {" "}
            {/* Cambiado el padding de p-4 a px-2 */}
            <a href="/plans">
              <FormattedMessage id="navbar.portfolio" defaultMessage="Plans" />
            </a>{" "}
          </li>
          <li className="text-gray-300 px-2 uppercase text-lg hover:text-white hover:scale-105 duration-300">
            {" "}
            {/* Cambiado el padding de p-4 a px-2 */}
            <a href="/contact">
              <FormattedMessage id="navbar.contact" defaultMessage="Contact" />
            </a>{" "}
          </li>
        </ul>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
