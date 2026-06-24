// data/events.ts

import {
  Event,
  EventFilter,
  EventFormatStat,
} from "@/types/events";

export const eventFilters: EventFilter[] = [
  {
    id: "all",
    label: "All events",
  },
  {
    id: "webinars",
    label: "Webinars",
  },
  {
    id: "conferences",
    label: "Conferences",
  },
  {
    id: "workshops",
    label: "Workshops",
  },
  {
    id: "symposiums",
    label: "Symposiums",
  },
  {
    id: "week",
    label: "This week",
  },
  {
    id: "online",
    label: "Online only",
  },
];

export const featuredEvent: Event = {
  id: "1",

  month: "JUL",
  day: 12,
  weekday: "Sat",

  title:
    "International Symposium on AI in Drug Discovery 2025",

  speaker: "Dr. Priya Anand",

  organization: "MIT CSAIL",

  category: "Symposium",

  format: "Online",

  time: "2:00 PM IST",

  location: "Zoom",

  registeredCount: 1240,

  tags: [
    {
      label: "Featured event",
    },
  ],

  featured: true,
};

export const upcomingEvents: Event[] = [
  {
    id: "2",

    month: "JUL",
    day: 12,
    weekday: "Sat",

    title:
      "Global Climate Modelling with Machine Learning — Methods & Challenges",

    speaker: "Dr. Anika Mehta",

    organization: "ETH Zurich",

    category: "Climate Science",

    format: "Online",

    time: "4:00 PM IST",

    location: "Google Meet",

    registeredCount: 340,

    tags: [
      {
        label: "Online",
      },
      {
        label: "Climate Science",
      },
    ],
  },

  {
    id: "3",

    month: "JUL",
    day: 13,
    weekday: "Sun",

    title:
      "CRISPR Frontiers 2025 — Asia-Pacific Conference on Gene Editing",

    speaker: "Multiple Speakers",

    organization: "AIIMS New Delhi",

    category: "Genomics",

    format: "In-person",

    time: "9:00 AM IST",

    location: "New Delhi",

    registeredCount: 820,

    tags: [
      {
        label: "In-person",
      },
      {
        label: "Genomics",
      },
    ],
  },

  {
    id: "4",

    month: "AUG",
    day: 14,
    weekday: "Thu",

    title:
      "Brain-Computer Interfaces for Rehabilitation",

    speaker: "Dr. Divya Rao",

    organization: "Charité Berlin",

    category: "Neuroscience",

    format: "Hybrid",

    time: "3:30 PM IST",

    location: "Online + Berlin",

    registeredCount: 560,

    tags: [
      {
        label: "Hybrid",
      },
      {
        label: "Neuroscience",
      },
    ],
  },
];

export const eventFormatStats: EventFormatStat[] =
  [
    {
      label: "Webinars",
      count: 128,
    },
    {
      label: "Conferences",
      count: 44,
    },
    {
      label: "Workshops",
      count: 28,
    },
    {
      label: "Symposiums",
      count: 18,
    },
  ];