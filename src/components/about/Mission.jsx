import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import h from "../../assets/img/h.jpg";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const Mission = () => {
  const intl = useIntl();

  const stats = [
    {
      name: intl.formatMessage({
        id: "about.stats1",
        defaultMessage: "Services",
      }),
      value: "7",
    },
    {
      name: intl.formatMessage({
        id: "about.stats2",
        defaultMessage: "Services",
      }),
      value: "24",
    },
    {
      name: intl.formatMessage({
        id: "about.stats3",
        defaultMessage: "Services",
      }),
      value: "12",
    },
    {
      name: intl.formatMessage({
        id: "about.stats4",
        defaultMessage: "Services",
      }),
      value: "33",
    },
  ];

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
    <section className="text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative z-10">
            <div className="h-80 lg:h-full rounded-lg overflow-hidden">
              <img
                src={h}
                alt="Office"
                className="object-cover h-full w-full transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-8 lg:p-12 rounded-lg bg-gray-900/90">
            <animated.h2
              ref={ref}
              style={fadeIn}
              className="text-3xl lg:text-7xl font-bold mb-4 transition-opacity duration-500"
            >
              <FormattedMessage id="mission.title" defaultMessage="Services" />
            </animated.h2>
            <animated.p
              ref={ref}
              style={fadeIn}
              className="text-lg lg:text-xl text-left transition-opacity duration-500"
            >
              <FormattedMessage id="mission.p1" defaultMessage="Services" />
            </animated.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsHovered(true);
      }, index * 200); // Adjust the interval duration as needed
      return () => clearTimeout(timeout);
    }
  }, [inView, index]);

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const fadeHover = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...fadeIn, ...fadeHover }}
      className="flex flex-col items-center text-center transition-opacity duration-500"
    >
      <dt className="text-2xl lg:text-4xl font-bold text-gray-500">
        {stat.name}
      </dt>
      <dd className="text-3xl lg:text-5xl font-bold text-white">
        {stat.value}
      </dd>
    </animated.div>
  );
};

export default Mission;
