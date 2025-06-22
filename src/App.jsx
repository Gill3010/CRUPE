import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IPCarousel from './components/IPCarousel';
import PatentCard from './components/PatentCard';
import PatentabilityCard from './components/PatentabilityCard';
import CopyrightRegistrationCard from './components/CopyrightRegistrationCard';
import TrademarkRegistrationCard from './components/TrademarkRegistrationCard';
import GeographicalIndicationCard from './components/GeographicalIndicationCard';
import PlantVarietyCertificateCard from './components/PlantVarietyCertificateCard';
import TechPackageDevelopmentCard from './components/TechPackageDevelopmentCard';
import InnovationContestParticipationCard from './components/InnovationContestParticipationCard ';
import IntellectualPropertyTrainingCard from './components/IntellectualPropertyTrainingCard';
import AboutUsCard from './components/AboutUsCard';


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
    <Router basename={import.meta.env.PROD ? '/_protect' : '/'}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <IPCarousel />
        

        <main className="flex-grow">
          <Routes>
            {/* Ruta principal (inicio) */}
            <Route
              path="/"
              element={
                <section id="patent-cards">
                  <ResponsiveGrid>
                    <PatentCard />
                    <PatentabilityCard />
                    <CopyrightRegistrationCard />
                    <TrademarkRegistrationCard />
                    <GeographicalIndicationCard />
                    <PlantVarietyCertificateCard />
                    <TechPackageDevelopmentCard />
                    <InnovationContestParticipationCard />
                    <IntellectualPropertyTrainingCard />
                  </ResponsiveGrid>
                </section>
              }
            />

            {/* Ruta /nosotros */}
            <Route
              path="/aboutus"
              element={
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                  <AboutUsCard />
                </section>
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