import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RESUME_URL } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadPDF(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = ""; // leaving it empty keeps the filename from the URL
  link.target = "_blank"; // optional: open in new tab if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadResume(): void {
  const resumeUrl = RESUME_URL;
  downloadPDF(resumeUrl);
}
