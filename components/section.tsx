export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-page">
        <h2 className="mb-10 font-mono text-xs text-muted">
          {index}
          <span className="px-3">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}
