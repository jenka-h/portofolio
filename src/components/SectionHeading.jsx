export default function SectionHeading({ children }) {
  return (
    <header className="section-heading">
      <h2 className="section-heading__title">
        <span className="section-heading__dot" aria-hidden="true" />
        {children}
      </h2>
    </header>
  );
}
