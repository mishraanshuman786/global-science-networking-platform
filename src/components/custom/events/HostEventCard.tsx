export default function HostEventCard() {
  return (
    <div className="rounded-xl border bg-blue-50 p-5">
      <h3 className="font-semibold">
        Host your event on GSP
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Organising a webinar or conference?
        List it free and reach 50,000+
        scientists.
      </p>

      <button className="mt-4 w-full rounded-lg border border-primary py-2 font-medium text-primary">
        Submit your event
      </button>
    </div>
  );
}