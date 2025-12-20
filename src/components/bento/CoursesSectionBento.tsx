import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { golfCourses } from '../../data/courses';
import { Region } from '../../types';

const CoursesSectionBento = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('Johannesburg');
  const activeRegionData = golfCourses.find((r) => r.name === activeRegion);
  const navigate = useNavigate();

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  // Show first 6 courses in bento grid
  const coursesToDisplay = activeRegionData?.courses.slice(0, 6) || [];

  return (
    <section id="courses" className="py-8 bg-corporate-50">
      <div className="container-custom">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-corporate-900 mb-2">
            Golf Courses by Region
          </h2>
          <p className="text-sm text-corporate-600">
            Explore South Africa's premier golf courses
          </p>
        </div>

        {/* Compact Region Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {golfCourses.map((region) => (
            <button
              key={region.name}
              onClick={() => setActiveRegion(region.name as Region)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeRegion === region.name
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-corporate-800 hover:bg-primary-100 border border-corporate-300'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Bento Grid of Courses */}
        {activeRegionData && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {coursesToDisplay.map((course, index) => {
              // Make first course larger (2x2)
              const isLarge = index === 0;
              return (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course.id)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 border-2 border-corporate-100 hover:border-primary-300 ${
                    isLarge ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className={`relative ${isLarge ? 'h-48' : 'h-32'} overflow-hidden`}>
                    <img
                      src={course.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop'}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className={`font-bold ${isLarge ? 'text-lg' : 'text-sm'} mb-1`}>
                        {course.name}
                      </h3>
                      {isLarge && course.location && (
                        <p className="text-xs opacity-90 mb-2">{course.location}</p>
                      )}
                      {isLarge && course.nationalRanking && (
                        <div className="text-xs font-semibold text-primary-300">
                          Ranked #{course.nationalRanking} in SA
                        </div>
                      )}
                    </div>
                  </div>
                  {!isLarge && (
                    <div className="p-2 bg-white">
                      <p className="text-xs text-corporate-600 truncate">{course.location || course.region}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        {activeRegionData && activeRegionData.courses.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('courses');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All {activeRegionData.courses.length} Courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSectionBento;

