// types/events.ts

export interface EventTag {
  label: string;
  color?: string;
}

export interface Event {
  id: string;
  month: string;
  day: number;
  weekday: string;

  title: string;
  speaker: string;
  organization: string;

  category: string;
  format: "Online" | "In-person" | "Hybrid";

  time: string;
  location: string;

  registeredCount: number;

  tags: EventTag[];

  featured?: boolean;
}

export interface EventFilter {
  id: string;
  label: string;
}

export interface EventFormatStat {
  label: string;
  count: number;
}