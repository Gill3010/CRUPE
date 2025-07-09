import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CongressForm from './components/CongressForm';
import CongressTriptych from './components/CongressTriptych';
import SponsorsCarousel from './components/SponsorsCarousel';
import SpeakersCarousel from './components/SpeakersCarousel';
import EventBannerWithCountdown from './components/EventBannerWithCountdown';
import OrganizingCommittee from './components/OrganizingCommittee';
import VideoShowcase from './components/VideoShowcase';
import VideoGalleryEnterview from './components/VideoGalleryEnterview';

const EventCalendar = lazy(() => import('./components/EventCalendar'));

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

const RedirectToEventsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      ← Volver a la página principal
    </button>
  );
};

const AppContent = () => {
  const location = useLocation();
  const noLayoutRoutes = ['/inscripcion', '/cronograma', '/comision-organizadora'];

  if (noLayoutRoutes.includes(location.pathname)) {
    const isOrganizing = location.pathname === '/comision-organizadora';

    return (
      <section
        className={`px-4 sm:px-6 lg:px-8 py-12 ${
          isOrganizing ? '' : 'max-w-5xl mx-auto'
        }`}
      >
        <RedirectToEventsButton />
        {location.pathname === '/inscripcion' && <CongressForm />}
        {location.pathname === '/cronograma' && (
          <Suspense fallback={<div>Cargando cronograma...</div>}>
            <EventCalendar />
          </Suspense>
        )}
        {isOrganizing && <OrganizingCommittee />}
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {location.pathname === '/' && <EventBannerWithCountdown />}

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SpeakersCarousel />

                <section className="px-4 sm:px-6 lg:px-8 py-12">
                  <CongressTriptych />
                </section>

                <section id="patent-cards">
                  <ResponsiveGrid>
                    {/* Cards adicionales si las tienes */}
                  </ResponsiveGrid>

                  <div className="mt-16">
                    <VideoShowcase />
                    <VideoGalleryEnterview />
                  </div>

                  <SponsorsCarousel />
                </section>
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router basename={import.meta.env.PROD ? '/_events' : '/'}>
    <AppContent />
  </Router>
);

export default App;