import { useState } from 'react';

interface GolfClubHireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GolfClubHireModal = ({ isOpen, onClose }: GolfClubHireModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    startDate: '',
    endDate: '',
    clubType: '',
    handedness: '',
    numberOfSets: '1',
    preferredBrand: '',
    deliveryLocation: '',
    specialRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Golf club hire request submitted:', formData);
    // For now, just close the modal
    alert('Thank you for your golf club hire request! We will contact you shortly to confirm availability.');
    onClose();
    // Reset form
    setFormData({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      startDate: '',
      endDate: '',
      clubType: '',
      handedness: '',
      numberOfSets: '1',
      preferredBrand: '',
      deliveryLocation: '',
      specialRequirements: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-corporate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-corporate-900">Book Your Golf Clubs</h2>
          <button
            onClick={onClose}
            className="text-corporate-500 hover:text-corporate-700 transition-colors duration-200 p-2 hover:bg-corporate-100 rounded-lg"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-corporate-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="surname" className="block text-sm font-semibold text-corporate-700 mb-2">
                Surname *
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                required
                value={formData.surname}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-corporate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-corporate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                placeholder="+27 12 345 6789"
              />
            </div>
          </div>

          {/* Rental Period */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-corporate-700 mb-2">
                Rental Start Date *
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-semibold text-corporate-700 mb-2">
                Rental End Date *
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
            </div>
          </div>

          {/* Club Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="clubType" className="block text-sm font-semibold text-corporate-700 mb-2">
                Club Type *
              </label>
              <select
                id="clubType"
                name="clubType"
                required
                value={formData.clubType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              >
                <option value="">Select club type</option>
                <option value="mens">Men's Clubs</option>
                <option value="ladies">Ladies' Clubs</option>
              </select>
            </div>

            <div>
              <label htmlFor="handedness" className="block text-sm font-semibold text-corporate-700 mb-2">
                Handedness *
              </label>
              <select
                id="handedness"
                name="handedness"
                required
                value={formData.handedness}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              >
                <option value="">Select handedness</option>
                <option value="right">Right-handed</option>
                <option value="left">Left-handed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="numberOfSets" className="block text-sm font-semibold text-corporate-700 mb-2">
                Number of Sets *
              </label>
              <select
                id="numberOfSets"
                name="numberOfSets"
                required
                value={formData.numberOfSets}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              >
                <option value="1">1 Set</option>
                <option value="2">2 Sets</option>
                <option value="3">3 Sets</option>
                <option value="4">4 Sets</option>
                <option value="5+">5+ Sets</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredBrand" className="block text-sm font-semibold text-corporate-700 mb-2">
                Preferred Brand (Optional)
              </label>
              <select
                id="preferredBrand"
                name="preferredBrand"
                value={formData.preferredBrand}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              >
                <option value="">No preference</option>
                <option value="cobra">Cobra</option>
                <option value="ping">Ping</option>
                <option value="adams">Adams</option>
                <option value="king-cobra">King Cobra</option>
                <option value="titleist">Titleist</option>
                <option value="taylormade">TaylorMade</option>
                <option value="wilson">Wilson</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Delivery Information */}
          <div>
            <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-corporate-700 mb-2">
              Delivery/Pickup Location *
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              required
              value={formData.deliveryLocation}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
              placeholder="Hotel name, address, or pickup location"
            />
          </div>

          {/* Special Requirements */}
          <div>
            <label htmlFor="specialRequirements" className="block text-sm font-semibold text-corporate-700 mb-2">
              Special Requirements or Notes (Optional)
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              rows={3}
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
              placeholder="Any specific requirements, handicap information, or additional notes..."
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Submit Rental Request
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 bg-corporate-200 text-corporate-700 font-semibold rounded-xl hover:bg-corporate-300 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GolfClubHireModal;

