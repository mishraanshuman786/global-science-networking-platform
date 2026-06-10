// terms.data.ts

import {PrivacySection} from "@/types/privacy";

export const privacySections: PrivacySection[] = [
  {
    id: 1,
    title: "Overview",

    notice: {
      type: "info",
      text: "GSP is committed to your privacy. We do not sell your data, serve ads, or share your personal information with third parties for commercial purposes. Ever.",
    },

    content: [
      'Global Science Platform ("GSP", "we", "us") operates gsp.org and its related services. This Privacy Policy explains what personal data we collect, how we use it, and the rights you have over it.',
      "By creating an account or using our services, you agree to the practices described in this policy. If you do not agree, please do not use our services.",
      "We comply with applicable data protection laws including GDPR (EU/UK) and India's Digital Personal Data Protection Act (DPDPA) 2023."
    ],
  },

  {
    id: 2,
    title: "Data We Collect",

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
    title: "How We Use Your Data",
    content:[
        "We use your data only to operate and improve GSP. Specifically we use it to:"
    ],
    bullets: [
      "Create and manage your account and profile",
      "Provide networking, messaging and community features",
      "Send transactional emails (account verification, event reminders, password resets)",
      "Analyse platform usage to improve features — only in anonymised, aggregated form",
      "Detect and prevent fraud, abuse and security threats",
      "Comply with applicable legal obligations"
    ],
  },

  {
    id: 4,
    title: "Data Sharing",

    content: [
      "We may share limited data only in the following situations:",
    ],

    bullets: [
      "Service providers — Trusted vendors who operate our infrastructure (cloud hosting, email delivery). They are contractually bound to protect your data and cannot use it for their own purposes.",
      "Legal compliance — When required by law, valid court order or governmental request.",
      "Safety — Where necessary to prevent serious harm to any person.",
     
    ],

    notice: {
      type: "warning",
      text: "We do not sell, rent or share your personal data with advertisers or third-party marketing platforms under any circumstances.",
    },
  },


];