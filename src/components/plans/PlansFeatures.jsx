import React from "react";
import { FaLock, FaCog, FaMobileAlt, FaHeadset } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PlansFeatures() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <section className="py-12">
      <div className="container py-4 px-6">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl font-semibold text-gray-800 text-center  lg:text-5xl dark:text-white">
              <FormattedMessage
                id="featuresplan.title"
                defaultMessage="Title"
              />
            </h1>
            <div className="mt-8 py-4">
              <Slider {...settings} className="w-4/5 mx-auto">
                <FeatureCard
                  icon={<FaLock className="w-6 h-6" />}
                  titleId="featuresplan.security"
                  descriptionId="featuresplan.secutitycont"
                />
                <FeatureCard
                  icon={<FaCog className="w-6 h-6" />}
                  titleId="featuresplan.upgrades"
                  descriptionId="featuresplan.upgradescont"
                />
                <FeatureCard
                  icon={<FaMobileAlt className="w-6 h-6" />}
                  titleId="featuresplan.multi"
                  descriptionId="featuresplan.multicont"
                />
                <FeatureCard
                  icon={<FaHeadset className="w-6 h-6" />}
                  titleId="featuresplan.support"
                  descriptionId="featuresplan.supportcont"
                />
              </Slider>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:pl-12">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, titleId, descriptionId }) => (
  <div className="space-y-3 text-center">
    <span className="inline-block p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 hover:scale-105 duration-500">
      {icon}
    </span>
    <h1 className="text-2xl lg:text-xl font-semibold text-gray-700 dark:text-white">
      <FormattedMessage id={titleId} defaultMessage="Title" />
    </h1>
    <p className="text-xl lg:text-base text-gray-500 dark:text-gray-300">
      <FormattedMessage id={descriptionId} defaultMessage="Description" />
    </p>
  </div>
);

export default PlansFeatures;
