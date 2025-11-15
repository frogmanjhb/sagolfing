import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CoursesSection />
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

