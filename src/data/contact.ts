// data/contact.ts

import {
  Mail,
  Briefcase,
  Newspaper,
} from "lucide-react";

export const contactCategories = [
  {
    id: "support",
    title: "General support",
    description:
      "Account, login or platform questions",
    icon: Mail,
  },

  {
    id: "partnership",
    title: "Partnerships",
    description:
      "Institutional & research org enquiries",
    icon: Briefcase,
    active: true,
  },

  {
    id: "press",
    title: "Press & media",
    description:
      "Interviews, press kits and coverage",
    icon: Newspaper,
  },
];

export const inquiryTopics = [
  "General enquiry",
  "Technical support",
  "Partnership",
  "Report an issue",
  "Press / media",
  "Feature request",
];

export const contactMethods = [
  {
    title: "Email support",
    value: "support@gsp.org",
    description:
      "Typically responds in < 24 hrs",
  },

  {
    title: "Partnerships",
    value: "partnerships@gsp.org",
    description:
      "Institutional & research enquiries",
  },

  {
    title: "Press & media",
    value: "press@gsp.org",
    description:
      "For journalists & media coverage",
  },
];

export const offices = [
  {
    city: "Bengaluru, India",
    tag: "HQ",
    address: [
      "C-Wing, NSECEL Building",
      "IISc Campus, Bengaluru 560012",
      "Karnataka, India",
    ],
  },

  {
    city: "Cambridge, USA",
    address: [
      "MIT Sandbox Innovation Fund",
      "77 Massachusetts Ave",
      "Cambridge, MA 02139, USA",
    ],
  },
];