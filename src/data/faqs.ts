// data/faq.ts
import {FAQCategory} from "@/types/faqs";

export const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    icon: "user",
    faqs: [
      {
        id: "who-can-join",
        question: "Who can join the Global Science Platform?",
        answer:
          "GSP is open to all researchers, scientists, academics, PhD students and science professionals worldwide. This includes researchers at universities, government labs, private research organisations and industry professionals."
      },
      {
        id: "what-is-gsp",
        question: "Is GSP free to use?",
        answer:
          "Yes. Creating an account and accessing core platform features is free."
      },
      {
        id: "approval",
        question: "Why does my account need to be approved?",
        answer:
          "We review profiles to maintain a trusted research community and verify institutional affiliations."
      },
      {
        id: "profile-info",
        question: "What should I include in my scientific profile?",
        answer:
          "Add your affiliation, expertise, publications, research interests and contact information."
      },
      {
        id: "non-institutional-email",
        question: "Can I register with a non-institutional email?",
        answer:
          "Yes, however additional verification may be required."
      }
    ]
  },

  {
    id: "account-login",
    title: "Account & login",
    icon: "lock",
    faqs: [
      {
        id: "forgot-password",
        question: "What login methods does GSP support?",
        answer:
          "You can sign in using email/password and supported authentication providers."
      },
      {
        id: "reset-password",
        question: "I forgot my password. How do I reset it?",
        answer:
          "Use the 'Forgot Password' link on the login page and follow the instructions."
      },
      {
        id: "delete-account",
        question: "How do I delete my account?",
        answer:
          "Navigate to Account Settings and choose Delete Account."
      },
      {
        id: "team-account",
        question: "Can I have more than one GSP account?",
        answer:
          "We recommend maintaining a single account associated with your professional identity."
      }
    ]
  },

  {
    id: "privacy",
    title: "Privacy & data",
    icon: "shield",
    faqs: [
      {
        id: "data-safe",
        question: "Does GSP sell my data?",
        answer:
          "No. Your data is handled according to our Privacy Policy."
      },
      {
        id: "email-visible",
        question: "Who can see my profile and posts?",
        answer:
          "Profile visibility depends on your privacy settings."
      },
      {
        id: "copy-data",
        question: "How do I request a copy of my data?",
        answer:
          "Contact support or use the privacy request form in your account settings."
      }
    ]
  }
];