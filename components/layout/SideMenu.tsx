
import Link from "next/link";

import "@/styles/common.css";
import "@/styles/home.css";

export default function SideMenu() {
  return (
    <ul className="side_menu fixed">
      <li>
        <Link href="#0" aria-label="Open menu">
          <img src="/images/hemburgure-icon.svg" alt="" />
        </Link>
      </li>

      <li>
        <Link href="#0" aria-label="Search">
          <img src="/images/search-icon.svg" alt="" />
        </Link>
      </li>

      <li>
        <Link href="#0" aria-label="Information">
          <img src="/images/info-icon.svg" alt="" />
        </Link>
      </li>

      <li>
        <Link href="#0" aria-label="WhatsApp">
          <img src="/images/whatsup-icon.svg" alt="" />
        </Link>
      </li>
    </ul>
  );
}
