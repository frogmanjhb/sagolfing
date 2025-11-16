import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';
import SEOHelmet from './components/SEOHelmet';
import StructuredData, { createOrganizationSchema, createLocalBusinessSchema } from './components/StructuredData';

function HomePage() {
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
      <Hero />
      <ServicesSection />
      <CoursesSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

