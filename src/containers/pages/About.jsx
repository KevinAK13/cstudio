import Layout from "../../hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/about/HeaderAbout";
import Footer from "../../components/home/Footer";
import LanguagePopover from "../../components/navbar/LanguagePopover";
import Mission from "../../components/about/Mission";
import Where from "../../components/about/Where";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title> Cazarez Studio | About</title>
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
      <Header />
      <Mission />
      <Where />
      <LanguagePopover />
      <Footer />
    </Layout>
  );
}

export default About;
