import { communitiesData } from "@/data/home";

export default function CommunitySection() {
  return (
    <section className="bg-background py-24">
      <div className="page-container">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {communitiesData.badge}
          </span>

          <h2 className="mt-4 text-4xl  text-foreground md:text-5xl">
            {communitiesData.title}
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {communitiesData.description}
          </p>
        </div>

        {/* Communities Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communitiesData.communities.map((community) => (
            <div
              key={community.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Colored Dot */}
              <div
                className={`h-3 w-3 rounded-full ${community.color}`}
              />

              {/* Content */}
              <div>
                <h3 className="font-semibold text-foreground">
                  {community.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {community.members} members
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}