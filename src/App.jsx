import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SCCarousel from './components/SCCarousel';
import CongressCountdown from './components/CongressCountdown';
import CongressTriptych from './components/CongressTriptych';
import SponsorsCarousel from './components/SponsorsCarousel';
import SpeakersCarousel from './components/SpeakersCarousel';


// Grilla responsive para las tarjetas
const ResponsiveGrid = ({ children }) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
};

ResponsiveGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router basename={import.meta.env.PROD ? '/_events' : '/'}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <SCCarousel />
        <CongressCountdown />
        

       <main className="flex-grow">
  <Routes>
    <Route
      path="/"
      element={
        <>
          {/* Tríptico fuera del grid, ocupa todo el ancho */}
          <section className="px-4 sm:px-6 lg:px-8 py-12">
            <CongressTriptych />
          </section>
          
          {/* Otras cards dentro del grid si las tienes */}
          <section id="patent-cards">
            <ResponsiveGrid>
      
              {/* Otras cards aquí */}
            </ResponsiveGrid>
            <SpeakersCarousel />
            <SponsorsCarousel />
          </section>
        </>
      }
    />
  </Routes>
</main>

        <Footer />
      </div>
    </Router>
  );
};
export default App;