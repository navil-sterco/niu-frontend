import type { FilterOption } from "@/types/happenings";

export const schoolOptions: FilterOption[] = [
  { value: "cs", label: "School of Computer Science" },
  { value: "eng", label: "School of Engineering" },
  { value: "mgmt", label: "School of Management" },
  { value: "sci", label: "School of Sciences" },
];

export const departmentOptions: FilterOption[] = [
  { value: "cse", label: "Computer Science & Engineering", parents: ["cs"] },
  { value: "aiml", label: "Artificial Intelligence & ML", parents: ["cs"] },
  { value: "cyber", label: "Cyber Security", parents: ["cs"] },
  { value: "me", label: "Mechanical Engineering", parents: ["eng"] },
  { value: "ce", label: "Civil Engineering", parents: ["eng"] },
  { value: "ece", label: "Electronics & Communication", parents: ["eng"] },
  { value: "bba", label: "Business Administration", parents: ["mgmt"] },
  { value: "fin", label: "Finance & Analytics", parents: ["mgmt"] },
  { value: "phy", label: "Physics", parents: ["sci"] },
  { value: "chem", label: "Chemistry", parents: ["sci"] },
  { value: "math", label: "Mathematics", parents: ["sci"] },
];

export const monthOptions: FilterOption[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
].map((label, i) => ({ value: String(i + 1), label }));

export const yearOptions: FilterOption[] = ["2026", "2025", "2024", "2023"].map((y) => ({ value: y, label: y }));

export const eventTypeOptions: FilterOption[] = [
  { value: "seminar", label: "Seminar" },
  { value: "workshop", label: "Workshop" },
  { value: "cultural", label: "Cultural" },
  { value: "sports", label: "Sports" },
  { value: "conference", label: "Conference" },
];

export const mediaTypeOptions: FilterOption[] = [
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
];
