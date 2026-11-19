import Link from "next/link";
import "@/components/program-details/program-details-state/program-details-state.css";

interface ProgramDetailsStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function ProgramDetailsState({
  title,
  message,
  actionLabel,
  actionHref,
  onAction,
}: ProgramDetailsStateProps) {
  return (
    <section className="pd-state">
      <div className="pd-state__inner">
        <h1>{title}</h1>
        <p>{message}</p>
        {actionLabel && actionHref && (
          <Link href={actionHref} className="pd-state__btn">
            {actionLabel}
          </Link>
        )}
        {actionLabel && onAction && (
          <button type="button" className="pd-state__btn" onClick={onAction}>
            {actionLabel}
          </button>
        )}
      </div>
    </section>
  );
}