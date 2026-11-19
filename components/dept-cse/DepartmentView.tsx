import { notFound } from "next/navigation";
import { getDepartmentOptions, getDepartmentPage } from "@/lib/dept-api";
import "@/components/dept-cse/dept-cse.css"; 
import "@/components/dept-cse/dept-cse-extra.css"; 
import AboutDepartment from "@/components/dept-cse/AboutDepartment";
// import AlumniSection from "@/components/dept-cse/AlumniSection";
import FacilitiesSection from "@/components/dept-cse/FacilitiesSection";
import FacultySlider from "@/components/dept-cse/FacultySlider";
import FaqSection from "@/components/dept-cse/FaqSection";
import GallerySection from "@/components/dept-cse/GallerySection";
import HeroBanner from "@/components/dept-cse/HeroBanner";
import HodMessage from "@/components/dept-cse/HodMessage";
import ProgramsGrid from "@/components/dept-cse/ProgramsGrid";
import QuickLinksBar from "@/components/dept-cse/QuickLinksBar";
// import AlumniWrap from "@/components/home/alumni-wrap/AlumniWrap";

export default async function DepartmentView({ slug }: { slug: string }) {
  const [data, options] = await Promise.all([getDepartmentPage(slug), getDepartmentOptions()]);

  if (!data) notFound();

  return (
    <main>
      {data.banner && (
        <HeroBanner data={data.banner} options={options} currentSlug={data.slug} currentName={data.name} />
      )}
      {data.about && <AboutDepartment data={data.about} />}
      {data.hod && <HodMessage data={data.hod} />}
      {data.programs && <ProgramsGrid data={data.programs} />}
      {data.quickLinks && <QuickLinksBar data={data.quickLinks} />}
      {data.faculty && <FacultySlider data={data.faculty} />}
      {data.facilities && <FacilitiesSection data={data.facilities} />}
      {/* {data.alumni && <AlumniSection data={data.alumni} />} */}
      {/* <AlumniWrap/> */}
      {data.gallery && <GallerySection items={data.gallery} />}
      {data.faq && <FaqSection data={data.faq} />}
    </main>
  );
}


