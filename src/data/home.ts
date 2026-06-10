import {
  UserCircle2,
  Users,
  MessageSquare,
  Network,
  Calendar,
  FileText,
} from "lucide-react";

export const heroData = {
  badge: "The professional network for science",

  title: {
    beforeHighlight: "Where",
    highlight: "scientists",
    afterHighlight: "connect, collaborate & grow",
  },

  subtitle:
    "Build your research profile, share discoveries, join communities and network with 50,000+ scientists worldwide.",

  buttons: [
    {
      text: "Create your profile",
      href:"/signup",
      variant: "linkedin",
    },
    {
      text: "Contact Us",
      href:"/contact",
      variant: "linkedinOutline",
    },
  ],

  
  stats: [
    {
      value: 50000,
      suffix: "+",
      label: "Researchers",
    },
    {
      value: 120,
      suffix: "+",
      label: "Countries",
    },
    {
      value: 800,
      suffix: "+",
      label: "Institutions",
    },
    {
      value: 200,
      suffix: "+",
      label: "Events / year",
    },
  ],

};


export const platformFeaturesData = {
  badge: "PLATFORM FEATURES",

  title: "Everything a scientist needs",

  description:
    "From publishing research to finding collaborators — built specifically for the scientific community.",

  features: [
    {
      title: "Scientific profile",
      description:
        "Showcase publications, patents, awards, education and research interests in a structured profile.",
      icon: UserCircle2,
    },
    {
      title: "Research networking",
      description:
        "Connect with peers, follow researchers, and discover mutual connections across institutions.",
      icon: Users,
    },
    {
      title: "Private messaging",
      description:
        "Direct 1:1 chat with file and PDF sharing, read receipts, and organised conversations.",
      icon: MessageSquare,
    },
    {
      title: "Scientific communities",
      description:
        "Join domain-specific groups in Physics, Chemistry, Biotech, AI, Healthcare and more.",
      icon: Network,
    },
    {
      title: "Events & webinars",
      description:
        "Discover and register for conferences, webinars and symposiums, with reminders built in.",
      icon: Calendar,
    },
    {
      title: "Verified Community",
      description:
        "Every member is reviewed. Credible, high-quality scientific network — no spam.",
      icon: FileText,
    },
  ],
};

export const communitiesData = {
  badge: "COMMUNITIES",

  title: "Find your field",

  description:
    "Join active communities of researchers in your domain and participate in focused discussions.",

  communities: [
    {
      name: "Physics",
      members: "4,200",
      color: "bg-blue-500",
    },
    {
      name: "Biotechnology",
      members: "3,800",
      color: "bg-emerald-500",
    },
    {
      name: "Artificial Intelligence",
      members: "6,100",
      color: "bg-violet-500",
    },
    {
      name: "Chemistry",
      members: "2,900",
      color: "bg-orange-500",
    },
    {
      name: "Healthcare",
      members: "5,400",
      color: "bg-pink-500",
    },
    {
      name: "Environmental Science",
      members: "1,800",
      color: "bg-amber-600",
    },
  ],
};

export const howItWorksData = {
  badge: "HOW IT WORKS",

  title: "Get started in 4 steps",

  description:
    "Your account is reviewed by our team to maintain a high-quality scientific community.",

  steps: [
    {
      number: "01",
      title: "Create account",
      description:
        "Sign up with email, mobile OTP or Google. Fill in your scientific profile details.",
    },
    {
      number: "02",
      title: "Await approval",
      description:
        "Our admin team reviews your registration to ensure a quality community.",
    },
    {
      number: "03",
      title: "Build your profile",
      description:
        "Add publications, patents, awards, education and research interests.",
    },
    {
      number: "04",
      title: "Connect & collaborate",
      description:
        "Start networking, join communities, share research and attend events.",
    },
  ],
};