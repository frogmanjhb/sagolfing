import { useEffect, useState } from 'react';
import FormFeedback from './FormFeedback';
import FormSubmitSuccess from './FormSubmitSuccess';
import ModalShell from './ModalShell';
import { useFormSubmit } from '../hooks/useFormSubmit';

interface GolfClubHireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialHireData = {
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
};

const GolfClubHireModal = ({ isOpen, onClose }: GolfClubHireModalProps) => {
  const [formData, setFormData] = useState(initialHireData);
  const { status, errorMessage, usedMailtoFallback, send, reset } = useFormSubmit();

  useEffect(() => {
    if (!isOpen) {
      reset();
      setFormData(initialHireData);
    }
  }, [isOpen, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDone = () => {
    reset();
    setFormData(initialHireData);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${formData.name} ${formData.surname}`.trim();

    await send({
      formType: 'golf-club-hire',
      subject: `Golf club hire request from ${fullName}`,
      fromName: fullName,
      replyTo: formData.email,
      fields: formData,
    });
  };

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={isSuccess ? handleDone : onClose}
      title={isSuccess ? 'Thank you' : 'Book Your Golf Clubs'}
    >
        {isSuccess ? (
          <FormSubmitSuccess
            title="Request submitted"
            message={
              usedMailtoFallback
                ? 'Your email app should open with your rental request ready to send.'
                : 'Your golf club hire request has been submitted successfully.'
            }
            detail={
              usedMailtoFallback
                ? 'Send the email to complete your request. We will contact you once we receive it.'
                : 'We will contact you shortly to confirm availability and arrange delivery.'
            }
            onDone={handleDone}
          />
        ) : (
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

          <FormFeedback status={status} errorMessage={errorMessage} />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-60 disabled:transform-none disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending…' : 'Submit Rental Request'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-8 py-4 bg-corporate-200 text-corporate-700 font-semibold rounded-xl hover:bg-corporate-300 transition-all duration-300 disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </form>
        )}
    </ModalShell>
  );
};

export default GolfClubHireModal;

