import React, { useEffect, useRef, useState } from "react";
import { FaRegCommentDots, FaRegFileAlt, FaRegLightbulb } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { FormattedMessage } from "react-intl";

function ProjectProcess() {
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));
  const refArray = Array(6)
    .fill()
    .map(() => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
      refArray.forEach((ref, index) => {
        if (
          ref.current &&
          window.innerHeight - ref.current.getBoundingClientRect().top > 100
        ) {
          setTimeout(() => {
            setIsVisible((prevState) => {
              const updatedState = [...prevState];
              updatedState[index] = true;
              return updatedState;
            });
          }, index * 500);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refArray]);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-white text-center mb-8">
          <FormattedMessage id="process.title" defaultMessage="Su Solicitud" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <ProcessStep
              key={index}
              index={index}
              icon={steps[index].icon}
              title={steps[index].title}
              description={steps[index].description}
              isVisible={isVisible[index]}
              ref={refArray[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: <FaRegCommentDots className="text-4xl text-white" />,
    title: (
      <FormattedMessage id="process.request" defaultMessage="Su Solicitud" />
    ),
    description: (
      <FormattedMessage
        id="process.reqdes"
        defaultMessage="Iniciamos por su solicitud para entender sus necesidades y requerimientos."
      />
    ),
  },
  {
    icon: <IoCalendarNumberOutline className="text-4xl text-white" />,
    title: (
      <FormattedMessage id="process.interview" defaultMessage="Entrevista" />
    ),
    description: (
      <FormattedMessage
        id="process.intdes"
        defaultMessage="Realizamos una entrevista para profundizar en tus objetivos y expectativas."
      />
    ),
  },
  {
    icon: <FaRegFileAlt className="text-4xl text-white" />,
    title: (
      <FormattedMessage
        id="process.design"
        defaultMessage="Diseño del Proyecto"
      />
    ),
    description: (
      <FormattedMessage
        id="process.designdes"
        defaultMessage="Creamos un plan detallado que integra sus necesidades y se enfoca en alcanzar sus objetivos."
      />
    ),
  },
  {
    icon: <FaRegLightbulb className="text-4xl text-white" />,
    title: <FormattedMessage id="process.ideas" defaultMessage="Propuestas" />,
    description: (
      <FormattedMessage
        id="process.ideades"
        defaultMessage="Presentamos las propuestas más adecuadas de diseño y funcionalidad."
      />
    ),
  },
  {
    icon: <GrDocumentTest className="text-4xl text-white" />,
    title: <FormattedMessage id="process.test" defaultMessage="Pruebas" />,
    description: (
      <FormattedMessage
        id="process.testdes"
        defaultMessage="Realizamos pruebas exhaustivas para garantizar la calidad y funcionalidad del proyecto."
      />
    ),
  },
  {
    icon: <MdSystemSecurityUpdateGood className="text-4xl text-white" />,
    title: <FormattedMessage id="process.end" defaultMessage="Entrega Final" />,
    description: (
      <FormattedMessage
        id="process.enddes"
        defaultMessage="Entregamos el proyecto finalizado e implementado."
      />
    ),
  },
];

const ProcessStep = React.forwardRef(
  ({ icon, title, description, isVisible }, ref) => {
    return (
      <div
        ref={ref}
        className={`text-center text-white ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-8"
        } transition-opacity duration-1000 ease-in-out delay-200`}
      >
        <div className="bg-blue-500 p-3 rounded-full inline-block mb-4 hover:bg-blue-600 hover:scale-105 duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    );
  }
);

export default ProjectProcess;
