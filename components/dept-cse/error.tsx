"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="dept_state">
      <div className="container">
        <h1>Something went wrong</h1>
        <p>We couldn’t load this department right now. Please try again.</p>
        <button type="button" className="btn_hovefct" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
