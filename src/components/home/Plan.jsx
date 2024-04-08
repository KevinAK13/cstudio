import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { FormattedMessage } from "react-intl";
import "./Plans.css"; // Importa el archivo CSS para los estilos adicionales

const Plan = () => {
  const buttonSpring1 = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 0.5,
  });

  const buttonSpring2 = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 0.7,
  });

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const springProps1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
    delay: 0.1,
  });

  const springProps2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
    delay: 0.1,
  });

  const springProps3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
    delay: 0.1,
  });

  const springProps4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
    delay: 0.1,
  });

  const springProps5 = useSpring({
    opacity: inView5 ? 1 : 0,
    transform: inView5
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
    delay: 0.1,
  });

  return (
    <div className="max-w-[1400px] rounded-lg  m-auto mt-6  px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <animated.img
          ref={ref1}
          style={springProps1}
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
        />
        <animated.img
          ref={ref2}
          style={springProps2}
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <animated.img
          ref={ref3}
          style={springProps3}
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt="/"
        />
        <animated.img
          ref={ref4}
          style={springProps4}
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="/"
        />
        <animated.img
          ref={ref5}
          style={springProps5}
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <animated.h3
          style={springProps1}
          className="text-5xl md:text-6xl font-bold"
        >
          <FormattedMessage id="cta.title" defaultMessage="Title" />
        </animated.h3>
        <animated.p style={springProps1} className="text-md py-6">
          <FormattedMessage id="cta.content" defaultMessage="Services" />
        </animated.p>

        <div className="flex justify-center pt-4">
          <animated.div className="flex space-x-4" style={buttonSpring1}>
            <div className="flex overflow-hidden bg-transparent border divide-x rounded-md rtl:flex-row-reverse dark:bg-transparent dark:border-gray-600 dark:divide-gray-600">
              <animated.button
                style={{
                  ...buttonSpring1,
                  whileHover: { scale: 1.05 },
                  backdropFilter: "blur(10px)",
                }}
                className="px-5 py-3 text-md md:text-lg lg:text-xl font-medium text-gray-300 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-900/40"
              >
                <FormattedMessage id="header.button1" defaultMessage="Title" />
              </animated.button>

              <animated.button
                style={{
                  ...buttonSpring2,
                  whileHover: { scale: 1.05 },
                  backdropFilter: "blur(10px)",
                }}
                className="px-5 py-3 text-md md:text-lg lg:text-xl font-medium text-gray-300 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-900/40"
              >
                <FormattedMessage
                  id="header.button2"
                  defaultMessage="Services"
                />
              </animated.button>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
