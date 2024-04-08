import React from "react";
import { motion } from "framer-motion";
import museo from "../../assets/img/museo.jpg";
import { FormattedMessage } from "react-intl";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      staggerChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={museo}
        alt="/"
      />
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-screen" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1100px] m-auto p-4">
          <h1 className="font-bold text-center text-5xl md:text-8xl lg:text-8xl drop-shadow-2xl">
            <a>
              <motion.span
                variants={textItemVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-200"
              >
                <FormattedMessage id="header.title" defaultMessage="Services" />
              </motion.span>
            </a>
          </h1>
          <motion.p
            variants={textItemVariants}
            className="drop-shadow-3xl text-center py-2 text-md lg:text-xl xl:text-2xl text-gray-300"
            initial="hidden"
            animate="visible"
          >
            <FormattedMessage id="header.subtitle" defaultMessage="Services" />
          </motion.p>{" "}
          <div className="flex justify-center pt-4">
            <motion.button
              className="flex space-x-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <div
                className="flex overflow-hidden bg-transparent border divide-x rounded-md rtl:flex-row-reverse dark:bg-transparent dark:border-gray-600 dark:divide-gray-600"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 text-md md:text-lg lg:text-xl font-medium text-gray-300 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-900/40 "
                >
                  <FormattedMessage
                    id="header.button1"
                    defaultMessage="Title"
                  />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 text-md md:text-lg lg:text-xl font-medium text-gray-300 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-900/40"
                >
                  <FormattedMessage
                    id="header.button2"
                    defaultMessage="Services"
                  />
                </motion.a>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
