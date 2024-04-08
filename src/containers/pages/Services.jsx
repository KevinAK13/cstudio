import Layout from "../../hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/home/Footer";
import LanguagePopover from "../../components/navbar/LanguagePopover";
import HeaderServices from "../../components/services/HeaderServices";
import Portfolio from "../../components/services/Portfolio";
import Features from "../../components/services/Features";
import Pros from "../../components/services/Pros";
import CTAS from "../../components/services/CTAS";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title> Cazarez Studio | Services</title>
        <meta
          name="description"
          content="Desarrollo de Soluciones Empresariales y Digitales."
        />
        <meta
          name="keywords"
          content="desarrollo web, paginas web, sitios web, analisis de datos"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://cazarez.studio/" />
        <meta name="author" content="Cazarez Studio" />
        <meta name="publisher" content="Cazarez Studio" />

        {/* Facebook tags */}
        <meta property="og:title" content={"Cazarez Studio"} />
        <meta
          property="og:description"
          content={"Desarrollo de Soluciones Empresariales y Digitales."}
        />
        <meta property="og:url" content={"https://cazarez.studio/"} />
        <meta property="og:image" content={"Cazarez Studio"} />
        {/* End Facebook tags */}
      </Helmet>
      <HeaderServices />
      <Portfolio />
      <Features />
      <Pros />
      <CTAS />
      <Footer />
      <LanguagePopover />
    </Layout>
  );
}

export default Services;
