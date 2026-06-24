export default function MyUpcomingEventsCard() {
  return (
    <div className="rounded-xl border bg-white p-5">
      <h3 className="font-semibold">
        My Upcoming Events
      </h3>

      <div className="mt-4 space-y-3">
        <div className="rounded-lg bg-muted p-3">
          <p className="font-medium">
            AI Drug Discovery Symposium
          </p>

          <p className="text-sm text-muted-foreground">
            Jul 12 · 2:00 PM IST
          </p>
        </div>

        <button className="w-full rounded-lg border py-2">
          View All
        </button>
      </div>
    </div>
  );
}