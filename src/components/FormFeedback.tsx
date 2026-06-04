import type { FormSubmitStatus } from '../hooks/useFormSubmit';

interface FormFeedbackProps {
  status: FormSubmitStatus;
  errorMessage?: string;
}

const FormFeedback = ({ status, errorMessage }: FormFeedbackProps) => {
  if (status !== 'error' || !errorMessage) {
    return null;
  }

  return (
    <div
      role="alert"
      className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      {errorMessage}
    </div>
  );
};

export default FormFeedback;
