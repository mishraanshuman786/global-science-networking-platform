export interface TermsSection {
  id: number;
  title: string;
  content?: string[];
  bullets?: string[];
  notice?: {
    type: "info" | "warning";
    text: string;
  };
}