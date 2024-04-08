import React from "react";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage, useIntl } from "react-intl";

function PricingSection() {
  const intl = useIntl(); // Aquí se utiliza el hook useIntl para acceder al objeto intl

  const enterprisePlanName = intl.formatMessage({ id: "pricing.name3" });

  const plans = [
    {
      name: (
        <FormattedMessage id="pricing.name1" defaultMessage="Su Solicitud" />
      ),
      price: (
        <FormattedMessage id="pricing.price1" defaultMessage="Su Solicitud" />
      ),
      period: (
        <FormattedMessage id="pricing.period" defaultMessage="Su Solicitud" />
      ),
      description: (
        <FormattedMessage id="pricing.desc1" defaultMessage="Su Solicitud" />
      ),
      features: [
        <FormattedMessage
          id="plan1.features11"
          defaultMessage="Característica 1"
        />,
        <FormattedMessage
          id="plan1.features12"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features13"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features14"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features15"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features16"
          defaultMessage="Característica 2"
        />,
      ],
      link: intl.formatMessage({ id: "link.basic" }), // URL para el plan "Pro"
    },
    {
      name: (
        <FormattedMessage id="pricing.name2" defaultMessage="Su Solicitud" />
      ),
      price: (
        <FormattedMessage id="pricing.price2" defaultMessage="Su Solicitud" />
      ),
      period: (
        <FormattedMessage id="pricing.period" defaultMessage="Su Solicitud" />
      ),
      description: (
        <FormattedMessage id="pricing.desc2" defaultMessage="Su Solicitud" />
      ),
      features: [
        <FormattedMessage
          id="plan1.features21"
          defaultMessage="Característica 1"
        />,
        <FormattedMessage
          id="plan1.features22"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features23"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features24"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features25"
          defaultMessage="Característica 2"
        />,
      ],
      link: intl.formatMessage({ id: "link.pro" }), // URL para el plan "Pro"
    },
    {
      name: (
        <FormattedMessage id="pricing.name3" defaultMessage="Su Solicitud" />
      ),
      price: <FormattedMessage id="pricing.price3" defaultMessage="Quote" />,
      period: "",
      description: (
        <FormattedMessage id="pricing.desc3" defaultMessage="Su Solicitud" />
      ),
      features: [
        <FormattedMessage
          id="plan1.features31"
          defaultMessage="Característica 1"
        />,
        <FormattedMessage
          id="plan1.features32"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features33"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features34"
          defaultMessage="Característica 2"
        />,
      ],
      link: intl.formatMessage({ id: "link.ecommerce" }), // URL para el plan "Pro"
    },
    {
      name: (
        <FormattedMessage id="pricing.name4" defaultMessage="Su Solicitud" />
      ),
      price: <FormattedMessage id="pricing.price4" defaultMessage="Quote" />,
      period: "",
      description: (
        <FormattedMessage id="pricing.desc4" defaultMessage="Su Solicitud" />
      ),
      features: [
        <FormattedMessage
          id="plan1.features41"
          defaultMessage="Característica 1"
        />,
        <FormattedMessage
          id="plan1.features42"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features43"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features44"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features45"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features46"
          defaultMessage="Característica 2"
        />,
      ],
      link: intl.formatMessage({ id: "link.booking" }), // URL para el plan "Pro"
    },
    {
      name: (
        <FormattedMessage id="pricing.name5" defaultMessage="Su Solicitud" />
      ),
      price: <FormattedMessage id="pricing.price5" defaultMessage="Quote" />,
      period: "",
      description: (
        <FormattedMessage id="pricing.desc5" defaultMessage="Su Solicitud" />
      ),
      features: [
        <FormattedMessage
          id="plan1.features51"
          defaultMessage="Característica 1"
        />,
        <FormattedMessage
          id="plan1.features52"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features53"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features54"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features55"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features56"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features57"
          defaultMessage="Característica 2"
        />,
        <FormattedMessage
          id="plan1.features58"
          defaultMessage="Característica 2"
        />,
      ],
      link: intl.formatMessage({ id: "link.custom" }), // URL para el plan "Pro"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">
          <FormattedMessage
            id="pricing.title"
            defaultMessage="Choose Your Plan"
          />
        </h2>
        <Slider {...settings} className="mt-8">
          {plans.map((plan, index) => (
            <div key={index} className="px-4 py-4">
              <div className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-6">
                  <h2 className="text-center text-4xl font-bold text-white mb-4">
                    {plan.name}
                  </h2>
                  <div className="text-center">
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="ml-1 text-lg text-gray-300">
                        {plan.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      {plan.description}
                    </p>
                  </div>
                  {plan.name === enterprisePlanName ? (
                    <div className="mt-6">
                      <a
                        href={plan.link}
                        className="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded-md  ease-in-out hover:bg-blue-700 focus:outline-none focus:bg-blue-700  duration-500"
                      >
                        <FormattedMessage
                          id="pricing.b1"
                          defaultMessage="Request Quote"
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-6">
                      <a
                        href={plan.link}
                        className="block  px-4 py-3 text-center text-white text-xl font-semibold bg-blue-600 rounded-md  ease-in-out hover:bg-blue-700 focus:outline-none focus:bg-blue-700  duration-500"
                      >
                        <FormattedMessage
                          id="pricing.b2"
                          defaultMessage="Request Quote"
                        />
                      </a>
                    </div>
                  )}
                  <div className="mt-8 border-t border-gray-700"></div>
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-400">
                      <FormattedMessage
                        id="pricing.include"
                        defaultMessage="Features included"
                      />
                    </p>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FaCheck className="w-4 h-4 text-green-500" />
                          <span className="ml-2 text-md text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PricingSection;
