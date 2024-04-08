import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Features.css";

const AnimatedDiv = animated.div;

const CTAServices = () => {
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
    <section>
      <AnimatedDiv
        ref={ref}
        className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4"
        style={textSpring}
      >
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">2179</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Cups of coffee
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">13</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Ongoing contracts
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">31</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Finished projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">3</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Years in business
          </p>
        </div>
      </AnimatedDiv>
      <div className="flex p-4 mx-auto mt-4 w-52">
        <button
          type="button"
          className="py-2 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          Join
        </button>
      </div>
    </section>
  );
};

export default CTAServices;
