import { Lock } from "lucide-react";

export default function JoinGSPCard() {
  return (
    <div className="rounded-2xl border bg-white p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Lock className="h-6 w-6" />
      </div>

      <h3 className="mt-4 font-semibold">
        Join GSP to register & get reminders
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Create a free account to register for
        events, add to calendar and see which
        connections are attending.
      </p>

      <div className="mt-6 space-y-3">
        <button className="w-full rounded-lg border py-2 font-medium">
          Create free account
        </button>

        <button className="w-full rounded-lg border py-2">
          Log in
        </button>
      </div>
    </div>
  );
}