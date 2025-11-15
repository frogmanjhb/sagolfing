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
      className="relative rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
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
        
        {/* National Ranking Badge */}
        {course.nationalRanking && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            #{course.nationalRanking}
          </div>
        )}
        
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
      <div className="p-4 bg-white">
        <h3 className="font-bold text-corporate-900 text-lg mb-1">
          {course.name}
        </h3>
        {course.location && (
          <p className="text-sm text-corporate-600 mb-2">{course.location}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xs text-corporate-500">{course.region}</span>
          <span className="text-primary-600 text-sm font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

