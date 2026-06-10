import {
  featuredEvent,
  upcomingEvents,
} from "@/data/events";

import EventFilters from "./EventFilters";
import FeaturedEventCard from "./FeaturedEventCard";
import EventCard from "./EventCard";
import EventCalendar from "./EventCalender";

import HostEventCard from "./HostEventCard";
import EventStatsCard from "./EventStatsCard";
import JoinGSPCard from "./JoinGSPCard";

export default function EventsSection() {
  return (
    <section className="py-10">
      <div className="page-container">
        <EventFilters />

        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <FeaturedEventCard
              event={featuredEvent}
            />

            <h2 className="my-5 text-lg font-semibold">
              Upcoming Events
            </h2>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>

            <div className="mt-6">
              <JoinGSPCard />
            </div>
          </div>

          <div className="space-y-4">
            <EventCalendar />
            <HostEventCard />
            <EventStatsCard />
          </div>
        </div>
      </div>
    </section>
  );
}