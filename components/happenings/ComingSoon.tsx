export default function ComingSoon({ label }: { label: string }) {
  return (
    <section className="top_sec">
      <div className="container">
        <div className="happen_empty">
          <h3>{label}</h3>
          <p>This section is coming soon.</p>
        </div>
      </div>
    </section>
  );
}
