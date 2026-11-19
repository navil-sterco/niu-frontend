"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="top_sec">
      <div className="container">
        <div className="happen_empty">
          <h3>Something went wrong</h3>
          <p>We couldn’t load this section right now.</p>
          <button type="button" className="submit_btn" onClick={reset}>
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}
