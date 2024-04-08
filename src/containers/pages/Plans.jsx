import Layout from "../../hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPlans from "../../components/plans/HeaderPlans";
import Footer from "../../components/home/Footer";
import LanguagePopover from "../../components/navbar/LanguagePopover";
import CTAP from "../../components/plans/CTAP";
import PricingSection from "../../components/plans/Pricing";
import PlansFeatures from "../../components/plans/PlansFeatures";
import ProjectProcess from "../../components/plans/ProjectProcess";
function Plans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title> Cazarez Studio | Plans</title>
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
      <HeaderPlans />
      <PlansFeatures />
      <ProjectProcess />
      <PricingSection />

      <CTAP />

      <LanguagePopover />
      <Footer />
    </Layout>
  );
}

export default Plans;
