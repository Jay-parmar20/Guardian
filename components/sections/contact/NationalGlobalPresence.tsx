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

function ActiveLocationArrow({ active }: { active: boolean }) {
	return (
		<span
			className={cn(
				"flex h-[11px] w-[10px] shrink-0 items-center justify-center",
				"transition-all duration-300 ease-out",
				active ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
			)}
		>
			<svg
				width="10"
				height="11"
				viewBox="0 0 10 11"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path d="M0 10.272V0L9.088 5.136L0 10.272Z" fill="black" />
			</svg>
		</span>
	);
}

export function NationalGlobalPresence() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selected = LOCATIONS[selectedIndex]!;

	return (
		<section
			className="bg-white pb-10 sm:pb-14 lg:pb-25"
			aria-labelledby="national-global-presence-heading"
		>
			<Container>
				{/* Heading */}
				<h2
					id="national-global-presence-heading"
					className="
            qs-reg
            mb-10
            text-center
            text-[clamp(1.75rem,3.5vw,3.125rem)]
            uppercase
            leading-tight
            tracking-[0.05em]
            text-[#202225]
            sm:mb-12
            lg:mb-[50px]
          "
				>
					National &amp; Global Presence
				</h2>

				{/* 30% / 70% */}
				<div
					className="
            grid
            grid-cols-1
            lg:grid-cols-[30%_70%]
            lg:items-start
          "
				>
					{/* LEFT */}
					<div className="min-w-0 pr-0 lg:pr-8 xl:pr-12">
						{/* Exactly 30px between location rows */}
						<div className="flex flex-col gap-[30px]">
							{LOCATIONS.map((location, index) => {
								const isActive = selectedIndex === index;

								return (
									<button
										key={location.name}
										type="button"
										onClick={() => setSelectedIndex(index)}
										aria-pressed={isActive}
										className="
                      group
                      block
                      w-full
                      cursor-pointer
                      text-left
                      focus:outline-none
                    "
									>
										{/* City */}
										<div className="flex items-center">
											{/* Keep arrow/title relation fixed */}
											<div
												className={cn(
													"flex shrink-0 items-center",
													"transition-all duration-300 ease-out",
													isActive ? "w-[19px]" : "w-0",
												)}
											>
												<ActiveLocationArrow active={isActive} />
											</div>

											<span
												className={cn(
													"block text-[#161616]",
													"transition-all duration-300 ease-out",

													"text-[30px] leading-[36px]",
													"sm:text-[34px] sm:leading-[42px]",
													"lg:text-[42px] lg:leading-[50px]",

													isActive
														? "n-bold opacity-100"
														: "n-bold opacity-100 group-hover:opacity-60",
												)}
											>
												{location.name}
											</span>
										</div>

										{/* Address - exactly 20px below city */}
										<div
											className={cn(
												"grid overflow-hidden transition-all duration-300 ease-out",
												isActive
													? "mt-[20px] grid-rows-[1fr] opacity-100"
													: "mt-0 grid-rows-[0fr] opacity-0",
											)}
										>
											<div className="min-h-0 overflow-hidden">
												<p
													className="
                            n-reg
                            w-full
                            max-w-[301px]
                            text-[16px]
                            leading-[20px]
                            text-[#161616]
                          "
												>
													{location.address}
												</p>
											</div>
										</div>
									</button>
								);
							})}
						</div>
					</div>

					{/* RIGHT - MAP */}
					<div
						className="
              relative
              mt-8
              h-[300px]
              w-full
              min-w-0
              overflow-hidden
              bg-[#E9E9E9]
              sm:h-[380px]
              lg:mt-0
              lg:h-[420px]
            "
					>
						<iframe
							key={selected.embedUrl}
							src={selected.embedUrl}
							title={`Map of ${selected.name}`}
							width="100%"
							height="100%"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							className="absolute inset-0 h-full w-full border-0"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
