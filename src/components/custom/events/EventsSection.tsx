import { featuredEvent, upcomingEvents } from "@/data/events";

import EventFilters from "./EventFilters";
import FeaturedEventCard from "./FeaturedEventCard";
import EventCard from "./EventCard";
import EventCalendar from "./EventCalender";
import { Event } from "@/types/events";
import MyActivityCard from "./MyActivityCard";
import HostEventCard from "./HostEventCard";
import EventStatsCard from "./EventStatsCard";
import JoinGSPCard from "./JoinGSPCard";
import MyUpcomingEventsCard from "./MyUpcomingEventsCard";

interface Props {
  featuredEvent: Event;

  events: Event[];

  selectedDate: number | null;

  onDateChange: (date: number | null) => void;

  selectedFilter: string;

  onFilterChange: (filter: string) => void;

  isLoggedIn: boolean;
}

export default function EventsSection({
  featuredEvent,
  events,
  selectedDate,
  onDateChange,
  selectedFilter,
  onFilterChange,
  isLoggedIn,
}: Props) {

  console.log("upcoming filtered Events", events);
  return (
    <section className="py-10">
      <div className="page-container">
        <EventFilters
          selectedFilter={selectedFilter}
          onFilterChange={onFilterChange}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <FeaturedEventCard event={featuredEvent} />

{/* showing date of Upcoming events */}
            <div className="mb-4 flex gap-2">
  {selectedDate && (
    <div className="rounded-full bg-muted px-3 py-1 text-sm">
      Jul {selectedDate}
    </div>
  )}
</div>

            <h2 className="my-5 text-lg font-semibold">Upcoming Events</h2>

            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div className="mt-6">
             {
  isLoggedIn ? (
   <MyUpcomingEventsCard />
  ) : (
    <JoinGSPCard />
  )
}
            </div>
          </div>

          <div className="space-y-4">
            <EventCalendar
              selectedDate={selectedDate}
              onDateChange={onDateChange}
            />

            {isLoggedIn ? (
              <>
                <MyUpcomingEventsCard />
                <MyActivityCard />
              </>
            ) : (
              <>
                <HostEventCard />
                <EventStatsCard />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
