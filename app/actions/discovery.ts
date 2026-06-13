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

export async function submitDiscovery(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if (str(formData.get('company')) !== '') {
    return { ok: true, message: 'Thanks — we will confirm shortly.' };
  }

  const firstName = str(formData.get('firstName'), 80);
  const lastName = str(formData.get('lastName'), 80);
  const email = str(formData.get('email'), 200);
  const phone = str(formData.get('phone'), 40);
  const preferredDate = str(formData.get('preferredDate'), 40);
  const time = str(formData.get('time'), 80);
  const passengers = str(formData.get('passengers'), 80);
  const notes = str(formData.get('notes'), 5000);

  if (!firstName || !lastName) return { ok: false, message: 'Please enter your name.' };
  if (!isEmail(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (!phone) return { ok: false, message: 'Please include a phone number so we can confirm.' };

  try {
    await sendEmail({
      subject: `Discovery Flight request — ${firstName} ${lastName}`,
      replyTo: email,
      rows: [
        { label: 'Name', value: `${firstName} ${lastName}` },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Preferred date', value: preferredDate },
        { label: 'Preferred time', value: time },
        { label: 'Passengers', value: passengers },
      ],
      message: notes,
    });
    return {
      ok: true,
      message:
        'Thanks! We received your Discovery Flight request and will confirm your date within one business day.',
    };
  } catch (err) {
    console.error('discovery form error:', err);
    return {
      ok: false,
      message:
        'Sorry, we could not submit your request right now. Please call 571-746-5515 or email info@redcardinalaviation.com directly.',
    };
  }
}
