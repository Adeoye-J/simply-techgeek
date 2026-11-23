export default function Section({ id, className = '', topless = false, children }) {
  return (
    <section
      id={id}
      className={`py-24 max-[760px]:py-17.5 ${topless ? 'pt-0!' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-285 px-5.5 ${className}`}>
      {children}
    </div>
  );
}