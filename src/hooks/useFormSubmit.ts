import { useCallback, useState } from 'react';
import { submitForm, type SubmitFormOptions } from '../lib/submitForm';

export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useFormSubmit() {
  const [status, setStatus] = useState<FormSubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [usedMailtoFallback, setUsedMailtoFallback] = useState(false);

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMessage('');
    setUsedMailtoFallback(false);
  }, []);

  const send = useCallback(
    async (options: SubmitFormOptions, onSuccess?: (method: 'api' | 'mailto') => void) => {
      setStatus('submitting');
      setErrorMessage('');
      setUsedMailtoFallback(false);

      try {
        const method = await submitForm(options);
        setUsedMailtoFallback(method === 'mailto');
        setStatus('success');
        onSuccess?.(method);
      } catch (error) {
        setStatus('error');
        setErrorMessage(
          error instanceof Error ? error.message : 'Something went wrong. Please try again.'
        );
      }
    },
    []
  );

  return { status, errorMessage, usedMailtoFallback, send, reset };
}
