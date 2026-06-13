'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitDiscovery, type FormState } from '@/app/actions/discovery';

const initial: FormState = { ok: false, message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-wait">
      <Send className="h-4 w-4" /> {pending ? 'Sending…' : 'Request Discovery Flight'}
    </button>
  );
}

export default function DiscoveryForm() {
  const [state, formAction] = useActionState(submitDiscovery, initial);

  return (
    <form
      action={formAction}
      className="bg-white rounded-3xl p-8 md:p-10 space-y-5 text-ink"
    >
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
        <Field id="phone" label="Phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="preferredDate" label="Preferred date" type="date" />
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-ink mb-1.5">
            Preferred time of day
          </label>
          <select
            id="time"
            name="time"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            <option>Morning (8a–11a)</option>
            <option>Midday (11a–2p)</option>
            <option>Afternoon (2p–5p)</option>
            <option>Evening (5p–8p)</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="passengers" className="block text-sm font-medium text-ink mb-1.5">
          Passengers (besides you)
        </label>
        <select
          id="passengers"
          name="passengers"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option>None — just me</option>
          <option>1 friend or family member</option>
        </select>
        <p className="mt-1 text-xs text-ink-muted">
          The Cessna 150 has two seats — you and the instructor fly together.
        </p>
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-ink mb-1.5">
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          placeholder="Flight experience, special occasion, accessibility needs…"
        />
      </div>
      <p className="text-xs text-ink-muted">
        By submitting you consent to receive text and email confirmations from Red
        Cardinal Aviation LLC regarding your booking.
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
