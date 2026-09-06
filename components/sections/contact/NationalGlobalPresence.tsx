"use client";

import { Container } from "@/components/common/Container";
import { cn } from "@/utils/cn";
import { useState } from "react";

type Location = {
  name: string;
  address: string;
  embedUrl: string;
};

const LOCATIONS: Location[] = [
  {
    name: "Mumbai",
    address:
      "C-602 & 603, ONE BKC, G Block, Bandra Kurla Complex, Bandra (E), Mumbai - 400051",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8652!3d19.0605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c955b6864227%3A0x891e43810d352cdd!2sThe%20Guardians%20Real%20Estate%20Advisory!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "Pune",
    address:
      "Westport, Unit No 410, Survey Nos. 32/1A/1/30 to 38 & 54 of Revenue Village, Pan Card Club Road, Baner, Pune 411045",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.7748!3d18.5584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfab61ad93cf%3A0x37284bac80c6bf4f!2sWESTPORT!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "Goa",
    address:
      "The Guardians Real Estate Advisory, 708, 7th floor, Gera's Imperium Grand, Patto Centre, Panjim, Goa 403001",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.2!2d73.8289!3d15.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc084e77d9501%3A0xcf2579638f5eb252!2sGera%27s%20Imperium%20Grand!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "Dubai",
    address:
      "TGREA International Advisory LLC, Office No 1807, Lake Central Tower, Business Bay, Dubai (UAE)",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.0!2d55.2730!3d25.1863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d79f79769%3A0x775f469534962029!2sLake%20Central%20Tower!5e0!3m2!1sen!2ae!4v1700000000000",
  },
];

export function NationalGlobalPresence() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = LOCATIONS[selectedIndex];

  return (
    <section
      className="bg-white py-10 sm:py-14 lg:py-20"
      aria-label="National and Global Presence"
    >
      <Container>
        <h2 className="qs-reg mb-8 text-center text-[clamp(1.75rem,3.5vw,3.125rem)] uppercase leading-tight tracking-[0.05em] text-[#202225] sm:mb-12">
          National &amp; Global Presence
        </h2>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — Location list */}
          <div className="flex flex-col">
            {LOCATIONS.map((loc, i) => {
              const isActive = i === selectedIndex;
              return (
                <button
                  key={loc.name}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className={cn(
                    "group flex items-start gap-4 py-4 text-left transition-colors",
                    i > 0 && "border-t border-black/[0.08]",
                  )}
                >
                  {/* Red active indicator bar */}
                  <span
                    className={cn(
                      "mt-1.5 h-[3px] w-8 shrink-0 rounded-sm transition-all duration-300",
                      isActive ? "bg-[#E85D4A]" : "bg-transparent",
                    )}
                  />
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-lg transition-colors sm:text-xl",
                        isActive
                          ? "n-bold text-[#202225]"
                          : "n-reg text-[#202225]/70",
                      )}
                    >
                      {loc.name}
                    </span>
                    {isActive && (
                      <p className="n-book mt-2 max-w-[280px] whitespace-pre-line text-sm leading-relaxed text-[#555] sm:text-[15px]">
                        {loc.address}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — Map */}
          <div className="h-[300px] w-full overflow-hidden rounded-sm bg-neutral-200 sm:h-[380px] lg:h-[420px]">
            <iframe
              key={selected.embedUrl}
              src={selected.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${selected.name}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
