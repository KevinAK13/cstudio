import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vallarta from "../../assets/img/vallarta.jpg";
import hermosillo from "../../assets/img/hermosillo.jpg";
import cdmx from "../../assets/img/cdmx.jpg";
import tepic from "../../assets/img/tepic.jpg";
import playa from "../../assets/img/playa2.jpg";

import { FormattedMessage } from "react-intl";

const Where = () => {
  const images = [
    { src: hermosillo, city: "Hermosillo" },
    { src: vallarta, city: "Puerto Vallarta" },
    { src: tepic, city: "Tepic" },
    { src: cdmx, city: "Ciudad de México" },
    { src: playa, city: "Playa del Carmen" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000, // Velocidad de la animación en milisegundos
    autoplay: true, // Hace que el slider avance automáticamente
    autoplaySpeed: 3000, // Intervalo de tiempo entre cada transición en milisegundos
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.section
      className="py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl lg:text-5xl font-semibold text-center text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FormattedMessage
            id="where.title"
            defaultMessage="Impulsando el Éxito en Todo México"
          />
        </motion.h2>
      </div>

      <div className="container px-0 lg:px-96">
        <motion.h2
          className="text-lg lg:text-2xl font-light text-center text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <FormattedMessage id="mission.p2" defaultMessage="Services" />
        </motion.h2>
        <div ref={ref}>
          <Slider {...settings} className="mt-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="px-4 py-4 relative"
              >
                <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={`Slide ${index}`}
                    className="w-full h-96 lg:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-3xl uppercase font-light">
                        {image.city}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default Where;
