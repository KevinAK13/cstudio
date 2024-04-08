import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    scale: 1, // Comienza con una escala más pequeña
  },
  animate: {
    opacity: 1,
    scale: 1, // Se expande a su tamaño original
    transition: {
      duration: 1, // Duración de la animación en segundos
      ease: "easeInOut", // Tipo de animación más suave
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8, // Se reduce de nuevo al salir
    transition: {
      duration: 1, // Duración de la transición
      ease: "easeInOut",
    },
  },
};

function Layout({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default Layout;
