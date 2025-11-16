import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { golfCourses } from '../data/courses';
import SEOHelmet from '../components/SEOHelmet';
import StructuredData, { createGolfCourseSchema, createBreadcrumbSchema } from '../components/StructuredData';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Scroll to top when page loads or courseId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  // Find the course across all regions
  const course = golfCourses
    .flatMap((region) => region.courses)
    .find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-corporate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-corporate-900 mb-4">Course Not Found</h2>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const coursesSection = document.getElementById('courses');
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  // Generate SEO meta description
  const metaDescription = course.description 
    ? `${course.description.substring(0, 150)}...` 
    : `Discover ${course.name}, ${course.nationalRanking ? `ranked #${course.nationalRanking} in South Africa` : `a premier golf course in ${course.region}`}. Book your tee time today with SA Golfing.`;

  // Generate keywords
  const courseKeywords = `${course.name}, ${course.region} golf, ${course.location || course.region}, ${course.designer || ''}, golf course south africa, book golf ${course.region}`.toLowerCase();

  return (
    <>
      <SEOHelmet
        title={`${course.name} Golf Course - ${course.region}`}
        description={metaDescription}
        canonical={`https://sagolfing-production.up.railway.app/course/${course.id}`}
        image={course.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=600&fit=crop'}
        keywords={courseKeywords}
        type="article"
      />
      <StructuredData data={createGolfCourseSchema(course)} />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://sagolfing-production.up.railway.app/' },
        { name: 'Golf Courses', url: 'https://sagolfing-production.up.railway.app/#courses' },
        { name: course.name, url: `https://sagolfing-production.up.railway.app/course/${course.id}` },
      ])} />
      
      <div className="min-h-screen bg-corporate-50 pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
              const coursesSection = document.getElementById('courses');
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Courses
        </button>

        {/* Hero Image */}
        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl mb-8">
          <img
            src={course.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=600&fit=crop'}
            alt={course.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              {course.nationalRanking && (
                <div className="inline-block bg-primary-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  National Ranking #{course.nationalRanking}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.name}</h1>
              {course.location && (
                <p className="text-xl text-corporate-200">{course.location}</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {course.description && (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-corporate-900 mb-4">About</h2>
                <p className="text-corporate-700 leading-relaxed">{course.description}</p>
              </div>
            )}

            {/* Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-corporate-900 mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 text-sm">✓</span>
                      </div>
                      <p className="text-corporate-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {course.features && course.features.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-corporate-900 mb-6">Course Features</h2>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-corporate-700">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-corporate-900 mb-4">Course Information</h3>
              <div className="space-y-4">
                {course.designer && (
                  <div>
                    <div className="text-sm text-corporate-600 mb-1">Designer</div>
                    <div className="font-semibold text-corporate-900">{course.designer}</div>
                  </div>
                )}
                {course.par && (
                  <div>
                    <div className="text-sm text-corporate-600 mb-1">Par</div>
                    <div className="font-semibold text-corporate-900">{course.par}</div>
                  </div>
                )}
                {course.length && (
                  <div>
                    <div className="text-sm text-corporate-600 mb-1">Length</div>
                    <div className="font-semibold text-corporate-900">{course.length}</div>
                  </div>
                )}
                {course.travelTime && (
                  <div>
                    <div className="text-sm text-corporate-600 mb-1">Travel Time</div>
                    <div className="font-semibold text-primary-600">{course.travelTime}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => {
                navigate('/');
                // Wait for navigation to complete before scrolling
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>

            {/* Region Badge */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-sm text-corporate-600 mb-2">Region</div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                {course.region}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CourseDetailPage;

