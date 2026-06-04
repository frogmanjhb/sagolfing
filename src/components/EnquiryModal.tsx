import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FormFeedback from './FormFeedback';
import { useFormSubmit } from '../hooks/useFormSubmit';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData = {
  name: '',
  email: '',
  phoneNumber: '',
  enquiry: '',
};

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [formData, setFormData] = useState(initialFormData);
  const { status, errorMessage, usedMailtoFallback, send, reset } = useFormSubmit();

  useEffect(() => {
    if (!isOpen) {
      reset();
      setFormData(initialFormData);
    }
  }, [isOpen, reset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await send(
      {
        formType: 'enquiry',
        subject: `Website enquiry from ${formData.name}`,
        fromName: formData.name,
        replyTo: formData.email,
        fields: {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          enquiry: formData.enquiry,
        },
      },
      (method) => {
        if (method === 'api') {
          setFormData(initialFormData);
          onClose();
        }
      }
    );
  };

  if (!isOpen) return null;

  const isSubmitting = status === 'submitting';

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-corporate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-corporate-900">Enquire Now</h2>
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
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-corporate-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 disabled:opacity-60"
              placeholder="Enter your name"
            />
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
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 disabled:opacity-60"
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
                disabled={isSubmitting}
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 disabled:opacity-60"
                placeholder="+27 12 345 6789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="enquiry" className="block text-sm font-semibold text-corporate-700 mb-2">
              Enquiry *
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              rows={5}
              required
              disabled={isSubmitting}
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-corporate-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none disabled:opacity-60"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <FormFeedback
            status={status}
            errorMessage={errorMessage}
            usedMailtoFallback={usedMailtoFallback}
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-60 disabled:transform-none disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending…' : 'Submit Enquiry'}
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
      </div>
    </div>,
    document.body
  );
};

export default EnquiryModal;
