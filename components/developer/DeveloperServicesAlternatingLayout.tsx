"use client";

import { Container } from "@/components/common/Container";
import type { ServicePanel } from "@/components/services/ServicesGrid";
import { SERVICE_PANELS } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
	panels?: ServicePanel[];
	ariaLabel?: string;
};

const accordionTransition = {
	duration: 0.35,
	ease: [0.22, 1, 0.36, 1] as const,
};

function getServiceAnchor(title: string) {
	return title
		.replace(/\s+Services$/i, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export function DeveloperServicesAlternatingLayout({
	panels,
	ariaLabel = "Developer services",
}: Props) {
	const services = panels ?? SERVICE_PANELS;

	useEffect(() => {
		const scrollToService = () => {
			// If an old bad URL exists like #land#financial,
			// always use only the LAST hash value.
			const rawHash = window.location.hash;

			if (!rawHash) return;

			const id = rawHash.split("#").filter(Boolean).pop();

			if (!id) return;

			const element = document.getElementById(id);

			if (!element) return;

			// Clean old bad URLs:
			// /services#land#financial -> /services#financial
			window.history.replaceState(null, "", `/services#${id}`);

			const headerOffset = 120;

			const top =
				element.getBoundingClientRect().top + window.scrollY - headerOffset;

			window.scrollTo({
				top,
				behavior: "smooth",
			});
		};

		// Wait for service blocks to exist in DOM
		const timeout = window.setTimeout(() => {
			scrollToService();
		}, 100);

		window.addEventListener("hashchange", scrollToService);

		return () => {
			window.clearTimeout(timeout);
			window.removeEventListener("hashchange", scrollToService);
		};
	}, []);

	return (
		<section
			className="bg-white py-12 sm:py-16 lg:py-[100px]"
			aria-label={ariaLabel}
		>
			<Container>
				{/* Exactly 50px between every service article */}
				<div className="flex flex-col gap-[50px]">
					{services.map((service, index) => {
						const isImageLeft = index % 2 === 0;
						const [introItem, ...accordionItems] = service.items;

						return (
							<DeveloperServiceRow
								key={service.title}
								service={service}
								introItem={introItem}
								accordionItems={accordionItems}
								isImageLeft={isImageLeft}
								index={index}
							/>
						);
					})}
				</div>
			</Container>
		</section>
	);
}

function DeveloperServiceRow({
	service,
	introItem,
	accordionItems,
	isImageLeft,
	index,
}: {
	service: (typeof SERVICE_PANELS)[0];
	introItem: {
		title: string;
		description?: string;
	};
	accordionItems: {
		title: string;
		description?: string;
	}[];
	isImageLeft: boolean;
	index: number;
}) {
	const [openIndex, setOpenIndex] = useState<number>(0);

	return (
		<article
			id={getServiceAnchor(service.title)}
			className="
		grid
		w-full
		scroll-mt-[120px]
		grid-cols-1
		overflow-hidden
		lg:grid-cols-[45%_55%]
	"
		>
			{/* =========================
			    IMAGE SIDE
			========================= */}
			<div
				className={`
					relative
					aspect-[3/2]
					w-full
					min-w-0
					overflow-hidden
					lg:aspect-auto
					lg:min-h-[540px]
					${isImageLeft ? "lg:order-1" : "lg:order-2"}
				`}
			>
				<Image
					src={service.imageSrc}
					alt={service.title}
					fill
					className="object-cover object-center"
					sizes="(max-width: 1024px) 100vw, 45vw"
					priority={index < 2}
				/>

				{/* Dark gradient */}
				<div
					className="
						pointer-events-none
						absolute
						inset-0
						bg-gradient-to-t
						from-[#202225]
						via-[#202225]/55
						to-transparent
					"
				/>

				{/* Image title */}
				<div className="absolute inset-0 flex items-center justify-center px-6">
					<h3
						className="
							n-bold
							max-w-[340px]
							text-center
							text-[20px]
							leading-[24px]
							tracking-[0.1em]
							text-white
							uppercase
						"
					>
						{service.title}
					</h3>
				</div>
			</div>

			{/* =========================
			    CONTENT SIDE
			========================= */}
			<div
				className={`
					w-full
					min-w-0
					bg-white
					${isImageLeft ? "lg:order-2" : "lg:order-1"}
				`}
			>
				<div
					className="
		flex
		h-full
		flex-col
		justify-start
		items-start
		px-5
		py-2
		sm:px-8
		sm:py-4
		lg:px-10
		lg:py-16
		xl:px-12.5
		xl:py-8
	"
				>
					{/* =========================
					    INTRODUCTION
					========================= */}
					<div>
						<button
							type="button"
							onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
							aria-expanded={openIndex === 0}
							className="
								flex
								w-full
								cursor-pointer
								items-center
								justify-between
								gap-5
								text-left
							"
						>
							<span
								className="
									n-bold
									min-w-0
									flex-1
									text-[20px]
									leading-[24px]
									text-[#000000]
								"
							>
								{introItem.title}
							</span>

							<span
								className="
									n-bold
									flex
									h-6
									w-6
									shrink-0
									items-center
									justify-center
									text-[20px]
									leading-[24px]
									text-[#000000]
								"
								aria-hidden
							>
								{openIndex === 0 ? "−" : "+"}
							</span>
						</button>

						{/* Introduction description */}
						<motion.div
							initial={false}
							animate={
								openIndex === 0
									? {
											height: "auto",
											opacity: 1,
										}
									: {
											height: 0,
											opacity: 0,
										}
							}
							transition={accordionTransition}
							className="overflow-hidden"
						>
							{introItem.description ? (
								<p
									className="
										n-reg
										mt-[10px]
										max-w-[533px]
										text-[16px]
										leading-[24px]
										text-[#000000]
									"
								>
									{introItem.description}
								</p>
							) : null}
						</motion.div>
					</div>

					{/* 20px below intro description */}
					<div className="mt-[20px]">
						{accordionItems.map((item, i) => {
							const itemIndex = i + 1;
							const isOpen = openIndex === itemIndex;

							return (
								<div key={item.title} className="border-t border-black/50">
									{/* Accordion heading */}
									<button
										type="button"
										onClick={() => setOpenIndex(isOpen ? -1 : itemIndex)}
										aria-expanded={isOpen}
										className="
											group
											flex
											w-full
											cursor-pointer
											items-center
											justify-between
											gap-5
											py-[15px]
											text-left
										"
									>
										<span
											className="
												n-bold
												min-w-0
												flex-1
												text-[20px]
												leading-[24px]
												text-[#000000]
												transition-opacity
												duration-200
												group-hover:opacity-70
											"
										>
											{item.title}
										</span>

										<span
											className="
												n-bold
												flex
												h-6
												w-6
												shrink-0
												items-center
												justify-center
												text-[20px]
												leading-[24px]
												text-[#000000]
											"
											aria-hidden
										>
											{isOpen ? "−" : "+"}
										</span>
									</button>

									{/* Accordion description */}
									{item.description ? (
										<motion.div
											initial={false}
											animate={
												isOpen
													? {
															height: "auto",
															opacity: 1,
														}
													: {
															height: 0,
															opacity: 0,
														}
											}
											transition={accordionTransition}
											className="overflow-hidden"
										>
											<p
												className="
													n-reg
													max-w-[533px]
													pb-[20px]
													text-[16px]
													leading-[24px]
													text-[#000000]
												"
											>
												{item.description}
											</p>
										</motion.div>
									) : null}
								</div>
							);
						})}

						{/* Final bottom divider */}
						{accordionItems.length > 0 && (
							<div className="border-t border-black/50" />
						)}
					</div>
				</div>
			</div>
		</article>
	);
}
