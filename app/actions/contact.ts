'use server';

import { sendEmail } from '@/lib/email';

export type FormState = {
  ok: boolean;
  message: string;
};

function str(v: FormDataEntryValue | null, max = 2000) {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot — bots will fill this; humans never see it
  if (str(formData.get('company')) !== '') {
    return { ok: true, message: 'Thanks — we will be in touch shortly.' };
  }

  const firstName = str(formData.get('firstName'), 80);
  const lastName = str(formData.get('lastName'), 80);
  const email = str(formData.get('email'), 200);
  const phone = str(formData.get('phone'), 40);
  const interest = str(formData.get('interest'), 120);
  const message = str(formData.get('message'), 5000);

  if (!firstName || !lastName) return { ok: false, message: 'Please enter your name.' };
  if (!isEmail(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (!message || message.length < 5)
    return { ok: false, message: 'Please include a short message.' };

  try {
    await sendEmail({
      subject: `New contact inquiry — ${interest || 'General'}`,
      replyTo: email,
      rows: [
        { label: 'Name', value: `${firstName} ${lastName}` },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Interested in', value: interest },
      ],
      message,
    });
    return { ok: true, message: 'Thanks — we received your message and will respond within one business day.' };
  } catch (err) {
    console.error('contact form error:', err);
    return {
      ok: false,
      message:
        'Sorry, we could not send your message right now. Please call 571-746-5515 or email info@redcardinalaviation.com directly.',
    };
  }
}
