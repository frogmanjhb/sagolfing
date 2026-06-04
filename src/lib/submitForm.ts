import { CONTACT_EMAIL } from '../config/seo';
import { openMailto } from '../utils/mailto';

export type FormType = 'enquiry' | 'booking' | 'golf-club-hire';

export interface SubmitFormOptions {
  formType: FormType;
  subject: string;
  fromName: string;
  replyTo: string;
  fields: Record<string, string | boolean | undefined>;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function formatFields(fields: SubmitFormOptions['fields']): string {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${formatLabel(key)}: ${value}`)
    .join('\n');
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

function getAccessKey(): string | undefined {
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  return typeof key === 'string' && key.trim() !== '' ? key.trim() : undefined;
}

async function submitViaWeb3Forms(options: SubmitFormOptions): Promise<void> {
  const accessKey = getAccessKey();
  if (!accessKey) {
    throw new Error('MISSING_ACCESS_KEY');
  }

  const { replyTo, fromName, subject, formType, fields } = options;
  const message = formatFields(fields);
  const phone =
    typeof fields.phoneNumber === 'string'
      ? fields.phoneNumber
      : typeof fields.phone === 'string'
        ? fields.phone
        : undefined;

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: fromName,
      email: replyTo,
      phone,
      message,
      form_type: formType,
      botcheck: '',
      ...Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value === undefined ? '' : String(value)])
      ),
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? 'Unable to send your message. Please try again.');
  }
}

function submitViaMailto(options: SubmitFormOptions): void {
  const { subject, fields, formType } = options;
  const body = [`Form: ${formType}`, '', formatFields(fields)].join('\n');
  openMailto(CONTACT_EMAIL, { subject, body });
}

/**
 * Sends form data to info@sagolfing.com via Web3Forms when VITE_WEB3FORMS_ACCESS_KEY is set.
 * Falls back to the visitor's email client when the key is not configured (local dev).
 */
export async function submitForm(options: SubmitFormOptions): Promise<'api' | 'mailto'> {
  if (getAccessKey()) {
    await submitViaWeb3Forms(options);
    return 'api';
  }

  submitViaMailto(options);
  return 'mailto';
}

export function isFormApiConfigured(): boolean {
  return Boolean(getAccessKey());
}
