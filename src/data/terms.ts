// terms.data.ts

import {TermsSection} from "@/types/terms";

export const termsSections: TermsSection[] = [
  {
    id: 1,
    title: "Acceptance of terms",

    notice: {
      type: "info",
      text: "By creating a GSP account or using any part of our platform, you agree to be bound by these Terms & Conditions and our Privacy Policy.",
    },

    content: [
      "These Terms & Conditions govern the use of the Global Science Platform (GSP).",
      "Please read them carefully before accessing or using any services.",
      "If you do not agree to these terms, you must discontinue use of the platform.",
      "Continued use after updates constitutes acceptance of the revised terms.",
    ],
  },

  {
    id: 2,
    title: "Eligibility",

    content: [
      "To create a GSP account you must meet all of the following requirements:",
    ],

    bullets: [
      "Be at least 16 years of age",
      "Be a researcher, scientist, academic, student, or science professional",
      "Provide accurate information during registration",
      "Not have been permanently suspended from GSP",
      "Have legal capacity to enter a binding agreement",
    ],
  },

  {
    id: 3,
    title: "Your account",

    bullets: [
      "You are responsible for maintaining account security.",
      "Do not share login credentials with others.",
      "Only one account is permitted per individual.",
      "Report unauthorised access immediately.",
      "You remain responsible for all activity under your account.",
    ],
  },

  {
    id: 4,
    title: "Acceptable use",

    content: [
      "You agree not to use GSP to:",
    ],

    bullets: [
      "Post false, misleading or plagiarised content",
      "Harass, threaten or abuse other members",
      "Send spam or phishing content",
      "Scrape or extract platform data without permission",
      "Impersonate another researcher or institution",
      "Upload content violating intellectual property rights",
      "Attempt to breach platform security",
      "Use the platform for unlawful purposes",
    ],

    notice: {
      type: "warning",
      text: "Violations of acceptable use may result in suspension or permanent removal without prior notice.",
    },
  },

  {
    id: 5,
    title: "Content & intellectual property",

    content: [
      "You retain ownership of content you post on GSP.",
      "By posting content, you grant GSP a limited, non-exclusive licence to display and distribute content within the platform.",
    ],
  },
];