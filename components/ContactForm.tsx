'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContact, type FormState } from '@/app/actions/contact';

const initial: FormState = { ok: false, message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-wait">
      <Send className="h-4 w-4" /> {pending ? 'Sending…' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);

  return (
    <form action={formAction} className="card p-8 md:p-10 space-y-5">
      {/* Honeypot — keep hidden from users; bots fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="firstName" label="First name" required />
        <Field id="lastName" label="Last name" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="email" label="Email" type="email" required />
        <Field id="phone" label="Phone" type="tel" />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-ink mb-1.5">
          I’m interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="Discovery Flight"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option>Discovery Flight</option>
          <option>Private Pilot Certification</option>
          <option>Airplane Rental</option>
          <option>Flight Review (BFR)</option>
          <option>Instrument Proficiency Check (IPC)</option>
          <option>Endorsements (High Performance / TAA / Complex)</option>
          <option>Aircraft Ferry</option>
          <option>Aerial Photography</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          placeholder="Tell us a bit about your goals and timing…"
        />
      </div>
      <p className="text-xs text-ink-muted">
        By providing your phone number you consent to receive text messages from Red
        Cardinal Aviation LLC regarding your inquiry. Standard message rates may apply.
      </p>

      {state.message && (
        <div
          role="status"
          className={[
            'rounded-xl border p-4 text-sm flex items-start gap-3',
            state.ok
              ? 'border-green-200 bg-green-50 text-green-900'
              : 'border-red-200 bg-red-50 text-red-900',
          ].join(' ')}
        >
          {state.ok ? <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" /> : <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />}
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton />
    </form>
  );
}

function Field({
  id,
  label,
  type = 'text',
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
