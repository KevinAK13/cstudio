import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FormattedMessage } from "react-intl";

const AnimatedDiv = animated.div;

const CTAP = () => {
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

  return (
    <container className="pt-1">
      <div className="pt-1 pb-5 px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="lg:flex lg:items-center lg:justify-between w-full lg:py-8 lg:px-8 z-20">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-left text-center">
            <span className="hidden lg:block">
              {" "}
              <FormattedMessage id="ctap.p1" defaultMessage="Title" />
            </span>
            <span className="block lg:hidden">
              {" "}
              <FormattedMessage id="ctap.p2" defaultMessage="Title" />
            </span>
            <span className="block lg:hidden">
              {" "}
              <FormattedMessage id="ctap.p3" defaultMessage="Title" />
            </span>
            <span className="block text-blue-500">
              {" "}
              <FormattedMessage id="ctap.p4" defaultMessage="Title" />
            </span>
          </h2>
          <div className="mt-8 lg:flex-shrink-0 flex flex-col lg:flex-row lg:justify-center">
            <div className="flex flex-col items-center justify-center sm:flex-row">
              <a
                href="/FAQ"
                className="py-3 px-6 lg:mr-2 lg:px-8 text-xl mb-2 sm:mb-0 bg-gray-100 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white duration-500 rounded-xl inline-block text-center lg:w-auto lg:text-center"
              >
                <FormattedMessage id="ctap.b1" defaultMessage="Title" />
              </a>
              <a
                href="/contact"
                className="py-3 px-6 sm:ml-4 lg:ml-0 lg:px-8 text-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 duration-500 rounded-xl inline-flex items-center justify-center text-center lg:w-auto lg:text-left"
              >
                <FormattedMessage id="ctap.b2" defaultMessage="Title" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};

export default CTAP;
