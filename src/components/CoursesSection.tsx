import { useState } from 'react';
import { golfCourses } from '../data/courses';
import { Region } from '../types';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('Johannesburg');
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const activeRegionData = golfCourses.find((r) => r.name === activeRegion);
  
  const handleRegionChange = (region: Region) => {
    setIsLoading(true);
    setActiveRegion(region);
    setShowAll(false); // Reset to showing only 9 when switching regions
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  };

  const COURSES_PER_PAGE = 9;
  const coursesToDisplay = activeRegionData?.courses 
    ? (showAll ? activeRegionData.courses : activeRegionData.courses.slice(0, COURSES_PER_PAGE))
    : [];
  const hasMoreCourses = activeRegionData && activeRegionData.courses.length > COURSES_PER_PAGE;

  return (
    <section id="courses" className="section-padding bg-corporate-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-900 mb-4">
            Golf Courses by Region
          </h2>
          <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
            Explore South Africa's premier golf courses across our most beautiful regions
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {golfCourses.map((region) => (
            <button
              key={region.name}
              onClick={() => handleRegionChange(region.name as Region)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeRegion === region.name
                  ? 'bg-primary-600 text-white shadow-xl'
                  : 'bg-white text-corporate-800 hover:bg-primary-100 hover:text-primary-700 border-2 border-corporate-300 shadow-md hover:shadow-lg'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Active Region Courses */}
        {activeRegionData && (
          <div>
            <h3 className="text-2xl font-bold text-corporate-900 mb-8 text-center">
              {activeRegionData.name} 
              <span className="text-primary-600 ml-2">· {activeRegionData.courses.length} Courses</span>
            </h3>
            
            {/* Loading Skeleton */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-corporate-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-corporate-200 rounded mb-4"></div>
                      <div className="h-4 bg-corporate-200 rounded mb-2"></div>
                      <div className="h-4 bg-corporate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesToDisplay.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
            
            {/* See More / See Less Button */}
            {hasMoreCourses && !isLoading && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-10 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {showAll ? 'Show Less' : `See More (${activeRegionData.courses.length - COURSES_PER_PAGE} more)`}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;

