export interface MailtoOptions {
  subject: string;
  body: string;
}

/** Opens the user's email client with a pre-filled message (fallback when API is not configured). */
export function openMailto(to: string, options: MailtoOptions): void {
  const params = new URLSearchParams({
    subject: options.subject,
    body: options.body,
  });
  window.location.href = `mailto:${to}?${params.toString()}`;
}
