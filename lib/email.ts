import 'server-only';
import nodemailer from 'nodemailer';
import { SITE } from './site';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;

function getTransport() {
  for (const key of requiredEnv) {
    if (!process.env[key]) {
      throw new Error(
        `Missing required environment variable: ${key}. Set it in Vercel project settings.`
      );
    }
  }

  const port = Number(process.env.SMTP_PORT);
  // Use TLS by default on 465; STARTTLS on 587 (secure: false + STARTTLS upgrade).
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export type EmailPayload = {
  subject: string;
  /** Key / value rows shown in the email body, in order. */
  rows: { label: string; value: string }[];
  /** Optional free-form message block printed below the rows. */
  message?: string;
  /** Reply-To header so the recipient can hit Reply and reach the sender. */
  replyTo?: string;
};

function escape(s: string) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHtml({ subject, rows, message }: EmailPayload) {
  const rowsHtml = rows
    .map(
      (r) => `
        <tr>
          <td style="padding:8px 14px;background:#f6f7f9;border-bottom:1px solid #eceef2;font-weight:600;color:#0B1220;width:30%;vertical-align:top;">${escape(r.label)}</td>
          <td style="padding:8px 14px;border-bottom:1px solid #eceef2;color:#1a2233;vertical-align:top;">${escape(r.value || '—')}</td>
        </tr>`
    )
    .join('');

  const messageHtml = message
    ? `<div style="margin-top:18px;padding:14px;background:#f6f7f9;border-left:3px solid #B0252B;color:#1a2233;white-space:pre-wrap;font-family:Arial,sans-serif;">${escape(message)}</div>`
    : '';

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#0B1220;">
  <table role="presentation" style="max-width:620px;margin:0 auto;border-collapse:collapse;">
    <tr><td style="padding:0 0 12px 0;font-size:18px;font-weight:700;color:#B0252B;">${escape(SITE.name)}</td></tr>
    <tr><td style="padding:0 0 18px 0;font-size:14px;color:#4A5468;">${escape(subject)}</td></tr>
    <tr><td>
      <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #eceef2;border-radius:8px;overflow:hidden;font-size:14px;">
        ${rowsHtml}
      </table>
      ${messageHtml}
    </td></tr>
    <tr><td style="padding:18px 0 0 0;font-size:12px;color:#4A5468;">Sent from the ${escape(SITE.name)} website.</td></tr>
  </table>
</body></html>`;
}

function renderText({ subject, rows, message }: EmailPayload) {
  const rowsText = rows.map((r) => `${r.label}: ${r.value || '—'}`).join('\n');
  return `${SITE.name}\n${subject}\n\n${rowsText}${message ? `\n\nMessage:\n${message}` : ''}\n`;
}

export async function sendEmail(payload: EmailPayload) {
  const transport = getTransport();
  const to = process.env.EMAIL_TO || SITE.formInbox;
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER!;
  await transport.sendMail({
    from: `"${SITE.name} Website" <${from}>`,
    to,
    subject: payload.subject,
    html: renderHtml(payload),
    text: renderText(payload),
    replyTo: payload.replyTo,
  });
}
