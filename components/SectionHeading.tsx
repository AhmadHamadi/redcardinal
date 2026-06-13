export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <div
      className={[
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
      ].join(' ')}
    >
      {eyebrow && (
        <p className={['eyebrow mb-3', light ? 'text-brand-200' : 'text-brand'].join(' ')}>
          {eyebrow}
        </p>
      )}
      <h2 className={light ? 'text-white' : 'text-ink'}>{title}</h2>
      {subtitle && (
        <p
          className={[
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-white/80' : 'text-ink-muted',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
