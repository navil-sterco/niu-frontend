import Link from "next/link";
import "@/components/leadership/leadership-not-found/leadership-not-found.css";

export default function LeadershipNotFound() {
  return (
    <section className="ld-notfound">
      <div className="ld-notfound__inner">
        <h1>Profile not found</h1>
        <p>The leadership profile you are looking for is unavailable or may have moved.</p>
        <Link href="/leadership" className="ld-notfound__btn">
          View all leadership
        </Link>
      </div>
    </section>
  );
}
