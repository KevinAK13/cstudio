import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaCheck } from "react-icons/fa";
import "./Features.css";
import laptop from "../../assets/img/laptop.jpg";
import code from "../../assets/img/code.jpg";
import media from "../../assets/img/media.jpg";
import data from "../../assets/img/data.jpg";
import { FormattedMessage } from "react-intl";

const AnimatedDiv = animated.div;
const AnimatedLi = animated.li;

const Pros = () => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    config: { duration: 400 },
    delay: 200,
  });

  const imageSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    config: { duration: 400 },
    delay: 400,
  });

  return (
    <AnimatedDiv
      ref={ref}
      className="relative max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20"
    >
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <animated.h4
              style={textSpring}
              className="mt-2 text-4xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-5xl sm:leading-9"
            >
              <FormattedMessage id="pros.title" defaultMessage="Title" />
            </animated.h4>
            <animated.p
              style={textSpring}
              className="mt-4 text-2xl leading-6 text-gray-500 dark:text-gray-300"
            >
              <FormattedMessage id="pros.description" defaultMessage="Title" />
            </animated.p>
            <animated.ul
              style={textSpring}
              className="gap-6 mt-8 md:grid md:grid-cols-2"
            >
              <AnimatedLi style={textSpring} className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 ">
                    <FaCheck />
                  </span>
                  <span className="ml-4 text-xl font-medium leading-6 text-gray-500 dark:text-gray-200">
                    <FormattedMessage id="pros.list1" defaultMessage="Title" />
                  </span>
                </div>
              </AnimatedLi>
              <AnimatedLi style={textSpring} className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 ">
                    <FaCheck />
                  </span>
                  <span className="ml-4 text-xl font-medium leading-6 text-gray-500 dark:text-gray-200">
                    <FormattedMessage id="pros.list2" defaultMessage="Title" />
                  </span>
                </div>
              </AnimatedLi>
              <AnimatedLi style={textSpring} className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 ">
                    <FaCheck />
                  </span>
                  <span className="ml-4 text-xl font-medium leading-6 text-gray-500 dark:text-gray-200">
                    <FormattedMessage id="pros.list3" defaultMessage="Title" />
                  </span>
                </div>
              </AnimatedLi>
              <AnimatedLi style={textSpring} className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 ">
                    <FaCheck />
                  </span>
                  <span className="ml-4 text-xl font-medium leading-6 text-gray-500 dark:text-gray-200">
                    <FormattedMessage id="pros.list4" defaultMessage="Title" />
                  </span>
                </div>
              </AnimatedLi>
              {/* Agregar más elementos de lista aquí */}
            </animated.ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <animated.div style={imageSpring} className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={data}
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={code}
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={media}
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={laptop}
                  alt="4"
                />
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Pros;
