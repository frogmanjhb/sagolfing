import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GolfCourse } from '../types';

interface CourseCardProps {
  course: GolfCourse;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-corporate-100 hover:border-primary-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop'}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Hover Overlay with Highlights */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-corporate-900 via-corporate-900/80 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
            <ul className="space-y-1">
              {course.highlights?.slice(0, 3).map((highlight, index) => (
                <li key={index} className="text-xs flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-5 bg-white">
        <h3 className="font-bold text-corporate-900 text-lg mb-2">
          {course.name}
        </h3>
        {course.location && (
          <p className="text-sm text-corporate-600 mb-3">{course.location}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xs text-corporate-500 font-medium">{course.region}</span>
          <span className="text-primary-600 text-sm font-bold group-hover:underline flex items-center gap-1">
            View Details 
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

