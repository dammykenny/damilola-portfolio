"use client";

import { ArrowUpRight, Network } from "lucide-react";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";

export default function FootballTalentProject() {
  return (
    <div className="group relative border-t border-white/10 py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-12">
        {/* PROJECT NUMBER */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-white/25">
            03
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
            Full-Stack · Sports Intelligence
          </p>
        </div>

        {/* PROJECT CONTENT */}
        <div>
          {/* HEADER */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                Football Talent Platform
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                Player discovery · Scouting · Data
              </p>
            </div>

            <Network
              size={19}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-white/25 transition-colors duration-300 group-hover:text-[var(--accent)]"
            />
          </div>

          {/* INTRODUCTION */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
            A full-stack football scouting platform designed to make player
            discovery more structured and data-driven. The application brings
            player profiles, scouting information, authentication, media, and
            discovery workflows together in one system.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
            Rather than treating player information as isolated records, the
            platform connects structured player data with application
            services, authentication, media processing, and discovery
            workflows to create a more complete scouting experience.
          </p>

          {/* CORE PIPELINE */}
          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Core pipeline
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-white/35">
              <span>PLAYER DATA</span>
              <span className="text-white/15">→</span>
              <span>SERVICE LAYER</span>
              <span className="text-white/15">→</span>
              <span>AUTHENTICATION</span>
              <span className="text-white/15">→</span>
              <span>MEDIA</span>
              <span className="text-white/15">→</span>
              <span>DISCOVERY</span>
            </div>
          </div>

          {/* PLATFORM ARCHITECTURE */}
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Platform architecture
                </p>

                <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
                  A connected scouting workflow.
                </h4>
              </div>

              <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/20 sm:block">
                Sports Intelligence / 03
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[9px] text-white/25">01</p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Data
                </p>

                <p className="mt-2 text-xs text-white/40">
                  Player profiles
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[9px] text-white/25">02</p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Services
                </p>

                <p className="mt-2 text-xs text-white/40">
                  Application logic
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[9px] text-white/25">03</p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Media
                </p>

                <p className="mt-2 text-xs text-white/40">
                  Images &amp; video
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[9px] text-white/25">04</p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Discovery
                </p>

                <p className="mt-2 text-xs text-white/40">
                  Scouting experience
                </p>
              </div>
            </div>
          </div>

          {/* DATA LAYER */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Data layer
            </p>

            <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              Structure player information for discovery.
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Player information is organized into structured profiles so the
              application can support discovery, profile views, scouting
              workflows, and richer player records instead of presenting
              disconnected pieces of information.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Player Profiles",
                "Scouting Data",
                "Teams",
                "Player Information",
                "Searchable Records",
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

          {/* PLATFORM */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Platform
            </p>

            <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              Application services
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Authentication, APIs, database services, and reusable
              application workflows provide the foundation connecting the
              interface to the underlying football data.
            </p>
          </div>

          {/* MEDIA */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Media
            </p>

            <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              Richer player profiles
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Image and video workflows allow player profiles to carry richer
              media content, making the scouting experience more useful than a
              purely text-based record.
            </p>
          </div>

          {/* APPLICATION WORKFLOW */}
          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Application workflow
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="border border-white/10 bg-white/[0.02] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  Authentication
                </p>

                <p className="mt-3 text-xs leading-5 text-white/40">
                  JWT-based authentication connects users to protected
                  application workflows and services.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  API
                </p>

                <p className="mt-3 text-xs leading-5 text-white/40">
                  REST-based service communication provides a structured layer
                  between the application interface and backend functionality.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  Discovery
                </p>

                <p className="mt-3 text-xs leading-5 text-white/40">
                  Player information is organized around discovery and
                  exploration rather than static presentation alone.
                </p>
              </div>
            </div>
          </div>

          {/* MEDIA PIPELINE */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Media pipeline
            </p>

            <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              Supporting richer scouting profiles.
            </h4>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-white/35">
              <span>UPLOAD</span>
              <span className="text-white/15">→</span>
              <span>PROCESS</span>
              <span className="text-white/15">→</span>
              <span>STORE</span>
              <span className="text-white/15">→</span>
              <span>PLAYER PROFILE</span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
              Cloudinary and FFmpeg support the media side of the application,
              allowing player images and video workflows to become part of the
              broader scouting platform.
            </p>
          </div>

          {/* ENGINEERING NARRATIVE */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="max-w-3xl text-sm leading-7 text-white/45">
              The central engineering problem was not simply creating a
              football-themed interface. It was designing a connected
              application around player data: separating interface concerns
              from service logic, managing authentication, connecting database
              operations, handling media, and creating workflows that make
              player discovery more structured and reusable.
            </p>
          </div>

          {/* TECHNOLOGY STACK */}
          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Engineering stack
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "REST APIs",
                "Cloudinary",
                "FFmpeg",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* APPLICATION LINK */}
          <div className="mb-3 flex flex-wrap gap-3">
            <a href="/work/football-talent" className="group/link inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-xs text-white/60 transition hover:border-[var(--accent)]/40 hover:text-white">View case study <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://football-talent-app.vercel.app/login"
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

          {/* PROJECT FOOTER */}
          <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/20">
            SPORTS INTELLIGENCE / 03
          </div>
        </div>
      </div>

      {/* HOVER ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
      <ProjectScreenshots
        status="Working application"
        screenshots={[
          {
            src: "/projects/football-talent/dashboard.png",
            label: "Scout dashboard",
            alt: "Football Talent scouting dashboard",
          },
          {
            src: "/projects/football-talent/discover-talents.png",
            label: "Talent discovery",
            alt: "Football Talent player discovery screen",
          },
          {
            src: "/projects/football-talent/player-overview.png",
            label: "Player profile",
            alt: "Football Talent player overview screen",
          },
        ]}
      />

    </div>
  );
}