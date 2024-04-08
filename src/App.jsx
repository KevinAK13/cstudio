import { BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cazares Studio</title>
          <meta
            name="description"
            content="Compra, venta y consigación de caballos en todo México."
          />
          <meta
            name="keywords"
            content="caballos, mexico, comprar, yeguas, vender caballos, comprar caballos, consigación"
          />
          <meta name="robots" content="all" />
          <link rel="canonical" href="https://www.cazares.studio/" />
          <meta name="author" content="Servicios Web XU" />
          <meta name="publisher" content="Servicios Web XU" />

          {/* Facebook tags */}
          <meta property="og:title" content={"Rancho Tepic"} />
          <meta
            property="og:description"
            content={"Compra, venta y consigación de caballos en todo México."}
          />
          <meta property="og:url" content={"https://www.ranchotepic.com/"} />
          <meta property="og:image" content={"Rancho Tepic"} />
          {/* End Facebook tags */}
        </Helmet>
        <Router>
          <AnimatedRoutes />
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;
