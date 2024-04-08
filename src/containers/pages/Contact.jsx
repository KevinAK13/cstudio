import Layout from "../../hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderContact from "../../components/contact/HeaderContact";
import Footer from "../../components/home/Footer";
import LanguagePopover from "../../components/navbar/LanguagePopover";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title> Cazarez Studio | Contact</title>
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
      <HeaderContact />
      <LanguagePopover />
      <Footer />
    </Layout>
  );
}

export default Contact;
