import Link from "next/link";

export default function NotFound() {
  return (
    <main className="dept_state">
      <div className="container">
        <h1>Department not found</h1>
        <p>The department you are looking for doesn’t exist or has moved.</p>
        <Link href="/departments/cse" className="btn_hovefct">
          Go to Computer Science &amp; Engineering
        </Link>
      </div>
    </main>
  );
}
