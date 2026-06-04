import type { FormSubmitStatus } from '../hooks/useFormSubmit';

interface FormFeedbackProps {
  status: FormSubmitStatus;
  errorMessage?: string;
  usedMailtoFallback?: boolean;
  successMessage?: string;
}

const FormFeedback = ({
  status,
  errorMessage,
  usedMailtoFallback,
  successMessage = 'Thank you! We will contact you shortly.',
}: FormFeedbackProps) => {
  if (status === 'idle' || status === 'submitting') {
    return null;
  }

  if (status === 'error') {
    return (
      <div
        role="alert"
        className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
      >
        {errorMessage}
      </div>
    );
  }

  return (
    <div
      role="status"
      className="rounded-lg border-2 border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
    >
      {usedMailtoFallback
        ? 'Your email app should open with your message ready to send. Send that email to complete your enquiry.'
        : successMessage}
    </div>
  );
};

export default FormFeedback;
