import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSection({ search, onSearchChange }: Props) {
  return (
    <section className="bg-[#0D2040] py-16">
      <div className="page-container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl  text-white md:text-5xl">
            Scientific events & webinars
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            Browse upcoming events. Join free to register, get reminders and see
            which of your connections are attending.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-full bg-white p-2">
            <div className="flex items-center gap-3 rounded-full border bg-white px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search events by topic or speaker..."
                className="border-0 shadow-none focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
