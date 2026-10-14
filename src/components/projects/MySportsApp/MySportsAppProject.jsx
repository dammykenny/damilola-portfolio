"use client";

import { ArrowUpRight, Search } from "lucide-react";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";

export default function MySportsAppProject() {
  return (
    <div className="group relative border-t border-white/10 py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12">
        {/* PROJECT NUMBER */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-white/25">
            04
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
            React · Sports Data · API Integration
          </p>
        </div>

        {/* PROJECT CONTENT */}
        <div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                My Sports App
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                Player discovery · Profiles · Sports data
              </p>
            </div>

            <Search
              size={19}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-white/25 transition-colors duration-300 group-hover:text-[var(--accent)]"
            />
          </div>

          {/* INTRODUCTION */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
            A React-based sports information application built around the
            discovery and exploration of professional athletes. The
            application integrates external sports data through TheSportsDB
            and transforms API responses into structured player profiles and
            searchable experiences.
          </p>

          {/* CORE PIPELINE */}
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-white/35">
            <span>SEARCH</span>

            <span className="text-white/15">→</span>

            <span>API</span>

            <span className="text-white/15">→</span>

            <span>PLAYER DATA</span>

            <span className="text-white/15">→</span>

            <span>PROFILE</span>

            <span className="text-white/15">→</span>

            <span>DISCOVERY</span>
          </div>

          {/* DISCOVERY / PROFILES / INTEGRATION */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="border border-white/10 bg-white/[0.02] p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Discovery
              </p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Search and explore athletes using structured sports data
                retrieved through an external REST API.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Profiles
              </p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Present detailed player information including teams, career
                history, milestones, honours, and sporting activity.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Integration
              </p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Connect a React interface to a third-party sports-data service
                and transform API responses into usable application data.
              </p>
            </div>
          </div>

          {/* DATA MODEL */}
          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
              Data model
            </p>

            <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              From external API to usable player intelligence.
            </h4>

            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
              SPORTS DATA / 04
            </p>
          </div>

          {/* DATA FLOW */}
          <div className="mt-7 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-5">
            <div className="bg-black p-4">
              <p className="font-mono text-[10px] text-white/25">01</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Search
              </p>
            </div>

            <div className="bg-black p-4">
              <p className="font-mono text-[10px] text-white/25">02</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Fetch
              </p>
            </div>

            <div className="bg-black p-4">
              <p className="font-mono text-[10px] text-white/25">03</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Normalize
              </p>
            </div>

            <div className="bg-black p-4">
              <p className="font-mono text-[10px] text-white/25">04</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Display
              </p>
            </div>

            <div className="bg-black p-4">
              <p className="font-mono text-[10px] text-white/25">05</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Explore
              </p>
            </div>
          </div>

          {/* PLAYER INTELLIGENCE */}
          <div className="mt-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Player intelligence
            </p>

            <h4 className="mt-2 text-lg font-medium tracking-[-0.02em] text-white">
              Career information
            </h4>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
              Player profiles bring together teams, career history, sporting
              activity, and other available information from the underlying
              sports-data service.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Career Information",
                "Teams",
                "Player Profiles",
                "Sporting Activity",
                "Honours",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DISCOVERY */}
          <div className="mt-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Richer discovery
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
              The application turns raw API data into a navigable experience
              where users can move from searching for a player to exploring a
              broader profile.
            </p>
          </div>

          {/* ENGINEERING PROBLEM */}
          <div className="mt-10 border-l border-white/10 pl-5 sm:pl-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
              Engineering problem
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
              The central engineering problem was not simply displaying sports
              information. It was connecting an external data source to a
              responsive application experience, handling API-driven data,
              routing users between discovery and profile views, and presenting
              information in a structure that remains useful as the underlying
              dataset changes.
            </p>
          </div>


          {/* TECHNOLOGY STACK */}
          <div className="mt-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
            Engineering stack
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
            {[
            "React",
            "React Router",
            "Tailwind CSS",
            "REST API",
            "TheSportsDB",
            "JavaScript",
            ].map((tag) => (
            <span
                key={tag}
                className="border border-white/15 bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 hover:border-[var(--accent)]/40 hover:bg-white/[0.04] hover:text-white"
            >
                {tag}
            </span>
            ))}
        </div>
          </div>



          {/* APPLICATION LINK */}
          <div className="mb-3 flex flex-wrap gap-3">
            <a href="/work/my-sports" className="group/link inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/60 transition hover:border-[var(--accent)]/40 hover:text-white">View case study <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://dammykenny.github.io/my-sports-app/"
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/60 transition hover:border-[var(--accent)]/40 hover:text-white"
            >
              View application

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* HOVER ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
      <ProjectScreenshots
        status="Working prototype"
        screenshots={[
          {
            src: "/projects/my-sports/search-results.png",
            label: "Search results",
            alt: "My Sports App search results",
          },
          {
            src: "/projects/my-sports/player-overview.png",
            label: "Player overview",
            alt: "My Sports App player overview",
          },
          {
            src: "/projects/my-sports/search.png",
            label: "Athlete discovery",
            alt: "My Sports App athlete discovery interface",
          },
        ]}
      />

    </div>
  );
}