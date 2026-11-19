import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/types/program";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const detailsHref = program.slug
    ? `/program/${program.slug}`
    : program.detailsUrl || "#";

  return (
    <div className="programs_grid">
      <div className="programs_ttl_grp">
        <h5>{program.title}</h5>

        <div className="programs_ttl">
          <Image
            src="/images/programs-date.svg"
            alt="Duration"
            width={16}
            height={16}
            className="img-fluid"
          />

          Duration
          <span>{program.duration}</span>

          <Link href={program.eligibilityUrl || "#"}>
            Check Eligibility
            <Image
              src="/images/program_right_arrow.svg"
              alt=""
              width={14}
              height={14}
              className="img-fluid"
            />
          </Link>
        </div>
      </div>

      <div className="programs_links">
        <Link href={program.applyUrl || "/admissions/apply"} className="apply_now_btn">
          Apply Now
        </Link>

        <Link href={detailsHref} className="know_more_btn">
          Know More
        </Link>
      </div>
    </div>
  );
}