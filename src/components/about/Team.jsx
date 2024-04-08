import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Features.css"; // Si son necesarios estilos adicionales
import code from "../../assets/img/code.jpg"; // Importar imágenes si es necesario

const TeamMember = ({ name, role, image, linkedin, instagram, github }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      ref={ref}
      style={fadeIn}
      className="flex flex-col items-center bg-transparent hover:bg-gray-900 duration-500 p-4 border sm:p-6 rounded-xl dark:border-gray-700"
    >
      <img
        className="object-cover w-96 rounded-lg aspect-square"
        src={image}
        alt=""
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{role}</p>

      <div className="flex mt-3 -mx-2">
        <a
          href={linkedin}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={instagram}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={github}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </animated.div>
  );
};

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <section className="">
      <div className="h-[32rem] bg-gray-200/10">
        <div className="container px-3 py-20 mx-auto">
          <animated.h1
            ref={ref}
            style={fadeIn}
            className="text-5xl font-semibold text-center text-white capitalize lg:text-7xl"
          >
            The Executive Team
          </animated.h1>
        </div>
      </div>

      <div className="container px-6 sm:py-18 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <TeamMember
            name="Arthur Melo"
            role="Design Director"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            linkedin="#"
            instagram="#"
            github="#"
          />
          {/* Clonar dos veces */}
          <TeamMember
            name="John Doe"
            role="Software Engineer"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            linkedin="#"
            instagram="#"
            github="#"
          />
          {/* Repite una estructura similar para otros miembros del equipo */}
          <TeamMember
            name="Jane Doe"
            role="Marketing Manager"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            linkedin="#"
            instagram="#"
            github="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
