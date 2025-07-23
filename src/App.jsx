import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

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
import PosterGuidelines from './components/PosterGuidelines';
import BookPresentationGuidelines from './components/BookPresentationGuidelines';
import PresentationGuidelines from './components/Presentationguidelines';
import AbstractSubmissionGuidelines from './components/AbstractSubmissionGuidelines';
import InvestmentTable from './components/InvestmentTable';
import ConferencePresentationGuidelines from './components/ConferencePresentationGuidelines';
import CongressOverview from './components/CongressOverview';
import PanelRequirements from './components/PanelRequirements';
import WorkshopRequirements from './components/WorkshopRequirements';
import AssistantRegistrationForm from './components/AssistantRegistrationForm';
import ParticipationSelector from './components/ParticipationSelector';
import PaymentMethods from './components/PaymentMethods';
import MetricsDashboard from './components/MetricsDashboard'; // ✅ NUEVO

const EventCalendar = lazy(() => import('./components/EventCalendar'));

const ResponsiveGrid = ({ children }) => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-12">
    {children}
  </div>
);

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

  const noLayoutRoutes = [
    '/inscripcion',
    '/cronograma',
    '/comision-organizadora',
    '/cartel-cientifico',
    '/presentacion-libros',
    '/presentacion-ponencias',
    '/presentacion-resumen',
    '/inversion',
    '/conferencias',
    '/ejes-tematicos',
    '/presentacion-panelistas',
    '/presentacion-talleres',
    '/asistencia',
    '/tipo-participacion',
  ];

  if (noLayoutRoutes.includes(location.pathname)) {
    const isOrganizing = location.pathname === '/comision-organizadora';

    return (
      <section
        className={`px-4 sm:px-6 lg:px-8 py-12 ${
          isOrganizing ? '' : 'max-w-5xl mx-auto'
        }`}
      >
        <RedirectToEventsButton />

        {location.pathname === '/inscripcion' && (
          <>
            <CongressForm />
            <PaymentMethods />
          </>
        )}

        {location.pathname === '/cronograma' && (
          <Suspense fallback={<div>Cargando cronograma...</div>}>
            <EventCalendar />
          </Suspense>
        )}

        {isOrganizing && <OrganizingCommittee />}

        {location.pathname === '/cartel-cientifico' && <PosterGuidelines />}
        {location.pathname === '/presentacion-libros' && <BookPresentationGuidelines />}
        {location.pathname === '/presentacion-ponencias' && <PresentationGuidelines />}
        {location.pathname === '/presentacion-resumen' && <AbstractSubmissionGuidelines />}
        {location.pathname === '/inversion' && (
          <>
            <InvestmentTable />
            <PaymentMethods />
          </>
        )}

        {location.pathname === '/conferencias' && <ConferencePresentationGuidelines />}
        {location.pathname === '/ejes-tematicos' && <CongressOverview />}
        {location.pathname === '/presentacion-panelistas' && <PanelRequirements />}
        {location.pathname === '/presentacion-talleres' && <WorkshopRequirements />}
        {location.pathname === '/asistencia' && (
          <>
            <AssistantRegistrationForm />
            <PaymentMethods />
          </>
        )}
        {location.pathname === '/tipo-participacion' && (
          <>
            <ParticipationSelector />
            <PaymentMethods />
          </>
        )}
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner justo debajo del navbar, solo en "/" */}
      {location.pathname === '/' && <EventBannerWithCountdown />}

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Métricas justo antes de SpeakersCarousel */}
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                  <MetricsDashboard />
                </section>

                <SpeakersCarousel />

                <section className="px-4 sm:px-6 lg:px-8 py-12">
                  <CongressTriptych />
                </section>

                <section id="patent-cards">
                  <ResponsiveGrid>
                    {/* Puedes agregar tarjetas aquí si lo deseas */}
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