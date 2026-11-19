
import CampusStack from "@/components/common/CampusStack";
import { campusLifeData } from "@/data/campus-life";

export default function Home() {
  return (
    <main>
      {/* Other homepage sections */}

      <CampusStack {...campusLifeData} />

      {/* Other homepage sections */}
    </main>
  );
}
