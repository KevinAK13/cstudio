import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="pt-8 bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-64 bg-cover lg:h-full rounded-sm overflow-hidden transform hover:scale-105 transition-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        />
      </div>

      <div ref={ref} className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl  font-semibold text-gray-800 dark:text-white md:text-6xl"
        >
          <FormattedMessage id="cta.title" defaultMessage="Title" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-semibold text-gray-800 dark:text-white md:text-6xl"
        >
          <FormattedMessage id="cta.content" defaultMessage="Content" />
        </motion.p>

        <div className="flex justify-center mt-6 sm:justify-start sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }} // Efecto de escala en hover
            className="bg-gray-900 text-white uppercase border-gray-400 border-1 px-6 py-2 rounded-lg hover:shadow-xl"
          >
            <FormattedMessage id="cta.button" defaultMessage="Services" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
