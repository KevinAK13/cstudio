import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FiMonitor, FiTrendingUp } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FormattedMessage } from "react-intl";
import { useInView } from "react-intersection-observer";

// Importa las imágenes
import laptop from "../../assets/img/laptop.jpg";
import code from "../../assets/img/code.jpg";
import media from "../../assets/img/media.jpg";
import data from "../../assets/img/data.jpg";

const FeatureItem = ({ icon, title, description, onClick }) => {
  const [ref, inView] = useInView();
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (inView && !appeared) {
      setTimeout(() => {
        setAppeared(true);
      }, 200); // Puedes ajustar el tiempo de retraso según tus preferencias
    }
  }, [inView, appeared]);

  const animationProps = useSpring({
    opacity: appeared ? 1 : 0,
    transform: appeared ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <div ref={ref} onClick={onClick} className="feature-item cursor-pointer">
      <animated.div style={animationProps}>
        <div className="icon-wrapper">
          <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md icon-bg">
            {icon}
          </div>
        </div>
        <h3 className="py-2 text-3xl lg:text-3xl xl:text-4xl font-semibold text-gray-200">
          {title}
        </h3>
        <p className="py-2 text-2xl lg:text-lg xl:text-xl text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </animated.div>
    </div>
  );
};

const Features = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalImage, setModalImage] = useState(null);

  const modalAnimation = useSpring({
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? "translateY(0%)" : "translateY(100%)",
  });

  const toggleModal = (title, description, image) => {
    setModalTitle(title);
    setModalDescription(description);
    setModalImage(image);
    setModalOpen(!modalOpen);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <section
      className="py-12 flex justify-center items-center text-center"
      onClick={closeModal}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          <FeatureItem
            icon={<FiMonitor size={28} />}
            title={
              <FormattedMessage
                id="carrousel.webdesign"
                defaultMessage="Title"
              />
            }
            description={
              <FormattedMessage id="features.webdesc" defaultMessage="Title" />
            }
            image={laptop}
            onClick={() =>
              toggleModal(
                <FormattedMessage
                  id="carrousel.webdesign"
                  defaultMessage="Title"
                />,
                <FormattedMessage
                  id="features.webcontent"
                  defaultMessage="Title"
                />,
                laptop
              )
            }
          />

          <FeatureItem
            icon={<MdDeveloperMode size={28} />}
            title={
              <FormattedMessage
                id="carrousel.development"
                defaultMessage="Title"
              />
            }
            description={
              <FormattedMessage id="features.devdesc" defaultMessage="Title" />
            }
            image={code}
            onClick={() =>
              toggleModal(
                <FormattedMessage
                  id="carrousel.development"
                  defaultMessage="Title"
                />,
                <FormattedMessage
                  id="features.devcontent"
                  defaultMessage="Title"
                />,
                code
              )
            }
          />
          <FeatureItem
            icon={<FiTrendingUp size={28} />}
            title={
              <FormattedMessage
                id="carrousel.branding"
                defaultMessage="Title"
              />
            }
            description={
              <FormattedMessage
                id="features.branddesc"
                defaultMessage="Title"
              />
            }
            image={media}
            onClick={() =>
              toggleModal(
                <FormattedMessage
                  id="carrousel.branding"
                  defaultMessage="Title"
                />,
                <FormattedMessage
                  id="features.brandcontent"
                  defaultMessage="Title"
                />,
                media
              )
            }
          />
          <FeatureItem
            icon={<GrAnalytics size={28} />}
            title={
              <FormattedMessage id="carrousel.data" defaultMessage="Title" />
            }
            description={
              <FormattedMessage id="features.datadesc" defaultMessage="Title" />
            }
            image={data}
            onClick={() =>
              toggleModal(
                <FormattedMessage id="carrousel.data" defaultMessage="Title" />,
                <FormattedMessage
                  id="features.datacontent"
                  defaultMessage="Title"
                />,
                data
              )
            }
          />
        </div>
      </div>
      <animated.div
        style={{ ...modalAnimation, zIndex: modalOpen ? 999 : -1 }}
        className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-filter backdrop-blur-sm flex justify-center items-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleModal("", "", null);
          }
        }}
      >
        <div className="bg-gray-900 p-8 rounded-lg shadow-md relative w-2/3 mx-auto">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-4">
            {modalTitle}
          </h2>
          {modalImage && (
            <div className="flex justify-center mb-4">
              <img
                src={modalImage}
                alt={modalTitle}
                className="rounded-lg max-w-full h-auto"
                style={{ maxWidth: "80%", maxHeight: "40vh" }}
              />
            </div>
          )}

          <p className="py-2 text-md lg:text-xl xl:text-2xl text-gray-200">
            {modalDescription}
          </p>
          <button
            onClick={() => toggleModal("", "", null)}
            className="modal-close-btn absolute top-0 right-0 m-4 text-gray-400"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>
      </animated.div>
    </section>
  );
};

export default Features;
