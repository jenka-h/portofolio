export default function SectionHeading({ number, children }) {
  return (
    <header className="section-heading">
      <h2 className="section-heading__title">
        {number && <span className="section-heading__num">{number}</span>}
        {children}
      </h2>
    </header>
  );
}
