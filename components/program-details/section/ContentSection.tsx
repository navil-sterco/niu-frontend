import type { ProgramSectionData } from "@/types/program-content";

interface ContentSectionProps {
  section: ProgramSectionData;
}

export default function ContentSection({
  section,
}: ContentSectionProps) {
  if (!section.enabled || section.fields.length === 0) {
    return null;
  }

  return (
    <section
      className={`program_content_section program_${section.key}`}
      id={section.key}
      data-section={section.key}
    >
      <div className="container">
        <div className="program_content_inner">
          <h2>{section.title}</h2>

          <div className="program_content_fields">
            {section.fields.map((field) => (
              <div
                className="program_content_field"
                key={field.key}
              >
                <strong>{field.label}</strong>

                {Array.isArray(field.value) ? (
                  <ul>
                    {field.value.map((value, index) => (
                      <li key={`${field.key}-${index}`}>
                        {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{field.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}