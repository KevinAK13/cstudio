import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const MobileMenu = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Mobile Button */}
      <div
        onClick={handleNav}
        className={`block sm:hidden z-10  ${
          nav ? "transition duration-500 " : "transition duration-500 "
        }`}
      >
        {nav ? (
          <AiOutlineClose size={20} style={{ color: "white" }} />
        ) : (
          <AiOutlineMenu size={20} style={{ color: "white" }} />
        )}
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center"
        }
        initial="hidden"
        animate={nav ? "visible" : "hidden"}
        exit="exit" // Usamos la nueva variante "exit"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 }, // Nueva variante para la salida
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.ul
          initial="hidden"
          animate={nav ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          <motion.li
            className="text-gray-300 p-4 font-semibold text-xl uppercase hover:text-white hover:scale-105 duration-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 }, // Nueva variante para la salida
            }}
          >
            <a href="/services">
              <FormattedMessage
                id="navbar.services"
                defaultMessage="Services"
              />
            </a>
          </motion.li>
          <motion.li
            className="text-gray-300 p-4 font-semibold text-xl uppercase hover:text-white hover:scale-105 duration-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 }, // Nueva variante para la salida
            }}
          >
            <a href="/about">
              <FormattedMessage id="navbar.aboutus" defaultMessage="About Us" />
            </a>
          </motion.li>
          <motion.li
            className="text-gray-300 p-4 font-semibold text-xl uppercase hover:text-white hover:scale-105 duration-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 }, // Nueva variante para la salida
            }}
          >
            <a href="/plans">
              <FormattedMessage
                id="navbar.portfolio"
                defaultMessage="Portfolio"
              />
            </a>
          </motion.li>
          <motion.li
            className="text-gray-300 p-4 font-semibold text-xl uppercase hover:text-white hover:scale-105 duration-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 }, // Nueva variante para la salida
            }}
          >
            <a href="/contact">
              <FormattedMessage id="navbar.contact" defaultMessage="Contact" />
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default MobileMenu;
