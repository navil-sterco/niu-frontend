import Image from "next/image";
import Link from "next/link";

import type { ProgramApiItem } from "@/lib/programs-details-api";

import "@/components/program-details/progarm-details-sticky/progarm-details-sticky.css";

interface ProgramDetailsProps {
  program: ProgramApiItem;
}

export default function ProgarmDetailsSticky({
  program,
}: ProgramDetailsProps) {
  return (
    <main className="program_details_page">
      <section className="program_details">
        <div className="container">
          <div className="program_details_heading">
            <span>Programs</span>

            <h1>{program.title}</h1>

            {program.sub_title && (
              <p>{program.sub_title}</p>
            )}

            <ul>
              {program.duration && (
                <li>
                  <Image
                    src="/images/programs-icons-1.svg"
                    alt=""
                    width={24}
                    height={24}
                    style={{ width: "auto", height: "auto" }}
                  />
                  Duration: {program.duration}
                </li>
              )}

              {program.fees && (
                <li>Fees: {program.fees}</li>
              )}
            </ul>

            {program.brochures && (
              <Link
                href={program.brochures}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Brochure
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}