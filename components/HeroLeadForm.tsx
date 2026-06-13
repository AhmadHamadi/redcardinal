'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Plane, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { submitContact, type FormState } from '@/app/actions/contact';

const initial: FormState = { ok: false, message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full disabled:opacity-60 disabled:cursor-wait"
    >
      <Plane className="h-4 w-4" />
      {pending ? 'Sending…' : 'Request Info'}
    </button>
  );
}

export default function HeroLeadForm() {
  const [state, formAction] = useActionState(submitContact, initial);

  return (
    <form
      action={formAction}
      className="relative rounded-2xl bg-white shadow-[0_24px_60px_-15px_rgba(11,18,32,0.5)] p-6 md:p-7 space-y-4 text-ink"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Free · No Obligation
        </p>
        <h2 className="mt-1 text-2xl font-display font-semibold text-ink leading-tight">
          Get started today.
        </h2>
        <p className="mt-1.5 text-sm text-ink-muted">
          Tell us a little about you — a real pilot will reach out within one business day.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field name="firstName" placeholder="First name" required />
        <Field name="lastName" placeholder="Last name" required />
      </div>
      <Field name="email" type="email" placeholder="Email address" required />
      <Field name="phone" type="tel" placeholder="Phone (optional)" />
      <div>
        <label htmlFor="interest" className="sr-only">
          I’m interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="Discovery Flight"
          className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option>Discovery Flight</option>
          <option>Private Pilot Certification</option>
          <option>Airplane Rental</option>
          <option>Flight Review (BFR)</option>
          <option>Instrument Proficiency Check (IPC)</option>
          <option>Endorsements (HP / TAA / Complex)</option>
          <option>Aircraft Ferry</option>
          <option>Aerial Photography</option>
          <option>Other</option>
        </select>
      </div>
      {/* Server action requires a message field — keep one as hidden marker */}
      <input
        type="hidden"
        name="message"
        value="Hero form lead — please contact me about the interest selected above."
      />

      {state.message && (
        <div
          role="status"
          className={[
            'rounded-lg border p-3 text-sm flex items-start gap-2',
            state.ok
              ? 'border-green-200 bg-green-50 text-green-900'
              : 'border-red-200 bg-red-50 text-red-900',
          ].join(' ')}
        >
          {state.ok ? (
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          )}
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton />

      <p className="flex items-center justify-center gap-1.5 text-[11px] text-ink-muted">
        <ShieldCheck className="h-3 w-3 text-brand" />
        Your details stay with us. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  name,
  type = 'text',
  placeholder,
  required = false,
}: {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      aria-label={placeholder}
      className="w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
    />
  );
}
