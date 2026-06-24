"use client";

import { useMemo, useState } from "react";

import HeroSection from "@/components/custom/events/HeroSection";
import EventsSection from "@/components/custom/events/EventsSection";

import {
  featuredEvent,
  upcomingEvents,
} from "@/data/events";

export default function EventsPage() {
  const [search, setSearch] = useState("");

  const [selectedFilter, setSelectedFilter] =
    useState("all");

  const [selectedDate, setSelectedDate] =
    useState<number | null>(12);

  const isLoggedIn = true;

  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter((event) => {
      const matchesSearch =
        search === ""
          ? true
          : [
              event.title,
              event.speaker,
              event.organization,
              event.category,
            ]
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase());

      const matchesDate =
        selectedDate === null
          ? true
          : event.day === selectedDate;

      const matchesCategory =
        selectedFilter === "all"
          ? true
          : event.category
              .toLowerCase()
              .includes(
                selectedFilter.toLowerCase()
              );

      return (
        matchesSearch &&
        matchesDate &&
        matchesCategory
      );
    });
  }, [
    search,
    selectedDate,
    selectedFilter,
  ]);

  return (
    <>
      <HeroSection
        search={search}
        onSearchChange={setSearch}
      />

      <EventsSection
        featuredEvent={featuredEvent}
        events={filteredEvents}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}