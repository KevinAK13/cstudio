import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const slideRef = useRef();

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, 50px, 0px)",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    afterChange: (current) => {
      slideRef.current = current;
    },
  };

  return (
    <section className="pt-12 flex justify-center items-center text-center">
      <div className="container mx-auto px-4">
        <Slider {...settings} className="rounded-lg overflow-hidden">
          <animated.div ref={ref} style={springProps}>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-5xl font-bold text-ellipsis leading-tight tracking-tight sm:text-6xl md:text-7xl px-4 py-2">
                <FormattedMessage
                  id="carrousel.webdesign"
                  defaultMessage="Services"
                />
              </h1>
            </div>
          </animated.div>
          <animated.div ref={ref} style={springProps}>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-5xl font-bold text-ellipsis leading-tight tracking-tight sm:text-6xl md:text-7xl px-4 py-2">
                <FormattedMessage
                  id="carrousel.development"
                  defaultMessage="Services"
                />
              </h1>
            </div>
          </animated.div>
          <animated.div ref={ref} style={springProps}>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-5xl font-bold text-ellipsis leading-tight tracking-tight sm:text-6xl md:text-7xl px-4 py-2">
                <FormattedMessage
                  id="carrousel.branding"
                  defaultMessage="Services"
                />
              </h1>
            </div>
          </animated.div>
          <animated.div ref={ref} style={springProps}>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-5xl font-bold text-ellipsis leading-tight tracking-tight sm:text-6xl md:text-7xl px-4 py-2">
                <FormattedMessage
                  id="carrousel.data"
                  defaultMessage="Services"
                />
              </h1>
            </div>
          </animated.div>
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
