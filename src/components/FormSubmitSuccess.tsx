interface FormSubmitSuccessProps {
  title?: string;
  message: string;
  detail?: string;
  onDone: () => void;
  doneLabel?: string;
}

const FormSubmitSuccess = ({
  title = 'Submitted successfully',
  message,
  detail,
  onDone,
  doneLabel = 'Done',
}: FormSubmitSuccessProps) => {
  return (
    <div className="p-8 text-center" role="status" aria-live="polite">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-9 w-9 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-corporate-900 mb-3">{title}</h3>
      <p className="text-corporate-700 text-base leading-relaxed max-w-md mx-auto">{message}</p>
      {detail && (
        <p className="text-corporate-600 text-sm mt-3 max-w-md mx-auto leading-relaxed">{detail}</p>
      )}
      <button
        type="button"
        onClick={onDone}
        className="mt-8 w-full sm:w-auto min-w-[12rem] px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {doneLabel}
      </button>
    </div>
  );
};

export default FormSubmitSuccess;
