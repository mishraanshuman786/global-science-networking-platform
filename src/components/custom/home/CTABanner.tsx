"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="w-full bg-background border-t border-border">
      <div className="page-container">
        <div className="flex flex-col items-center justify-center text-center py-16 lg:py-20 gap-4">

          <h2 className="text-3xl lg:text-4xl  text-foreground leading-tight max-w-xl">
            Ready to join the network?
          </h2>

          <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
            Join 50,000+ scientists from 120 countries building the future of science.
          </p>

          {/* <div className="mt-2">
            <Link
              href="/register"
              className="
                inline-flex items-center justify-center
                h-11 px-7
                rounded-full
                border border-foreground
                bg-transparent
                text-foreground text-sm font-medium
                hover:bg-foreground hover:text-background
                transition-colors duration-150
              "
            >
              Create free account
            </Link>
          </div> */}
          <Button variant="linkedinOutline" size="xl"><Link href="/signup">Create Free Account</Link></Button>

        </div>
      </div>
    </section>
  );
}