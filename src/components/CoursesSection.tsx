import { useState } from 'react';
import { golfCourses } from '../data/courses';
import { Region } from '../types';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('Johannesburg');

  const activeRegionData = golfCourses.find((r) => r.name === activeRegion);

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
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {golfCourses.map((region) => (
            <button
              key={region.name}
              onClick={() => setActiveRegion(region.name as Region)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeRegion === region.name
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-corporate-700 hover:bg-primary-50 hover:text-primary-600 border border-corporate-200'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Active Region Courses */}
        {activeRegionData && (
          <div>
            <h3 className="text-2xl font-bold text-corporate-900 mb-6 text-center">
              {activeRegionData.name} - Top {activeRegionData.courses.length} Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeRegionData.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;

