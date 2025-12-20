import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ViewModeProvider, useViewMode } from './contexts/ViewModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import HeroBento from './components/bento/HeroBento';
import ServicesSectionBento from './components/bento/ServicesSectionBento';
import CoursesSectionBento from './components/bento/CoursesSectionBento';
import ClientsSectionBento from './components/bento/ClientsSectionBento';
import ContactSectionBento from './components/bento/ContactSectionBento';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SEOHelmet from './components/SEOHelmet';
import StructuredData, { createOrganizationSchema, createLocalBusinessSchema } from './components/StructuredData';

function HomePage() {
  const { viewMode } = useViewMode();

  return (
    <>
      <SEOHelmet
        title="SA Golfing - Discover South Africa's Best Golf Courses"
        description="Your preferred golfing partner away from home. Book tee times at South Africa's premier golf courses including Blair Atholl, Glendower, Fancourt, and more. Expert golf tours and experiences across Johannesburg, Cape Town, Garden Route, and Durban."
        canonical="https://sagolfing-production.up.railway.app/"
        keywords="south africa golf courses, golf booking south africa, golf tours south africa, johannesburg golf, cape town golf, garden route golf, durban golf, blair atholl, glendower, fancourt, golf holidays south africa"
      />
      <StructuredData data={createOrganizationSchema()} />
      <StructuredData data={createLocalBusinessSchema()} />
      {viewMode === 'bento' ? (
        <>
          <HeroBento />
          <ServicesSectionBento />
          <CoursesSectionBento />
          <ClientsSectionBento />
          <ContactSectionBento />
        </>
      ) : (
        <>
          <Hero />
          <ServicesSection />
          <CoursesSection />
          <ClientsSection />
          <ContactSection />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <ViewModeProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:courseId" element={<CourseDetailPage />} />
              <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ViewModeProvider>
  );
}

export default App;

