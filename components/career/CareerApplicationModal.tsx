"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useId, useRef } from "react";
import Image from "next/image";

import { useBodyScrollLock } from "@/components/marketing/visit-lead-modal/useBodyScrollLock";
import { useFocusTrap } from "@/components/marketing/visit-lead-modal/useFocusTrap";
import { CareerApplicationForm } from "./CareerApplicationForm";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const overlayVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.45,
			ease: EASE_SMOOTH,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.35,
			ease: EASE_SMOOTH,
		},
	},
};

const panelVariants: Variants = {
	hidden: {
		opacity: 0,
		y: "72vh",
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: EASE_SMOOTH,
		},
	},
	exit: {
		opacity: 0,
		y: "28vh",
		transition: {
			duration: 0.45,
			ease: EASE_SMOOTH,
		},
	},
};

export type CareerApplicationModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

function CloseIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M0.0153809 0L13.6994 13.684"
				stroke="currentColor"
				strokeWidth="1.24446"
				strokeLinecap="round"
			/>

			<path
				d="M13.684 0L0 13.684"
				stroke="currentColor"
				strokeWidth="1.24446"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function MailIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M11.7 9.375L7.71427 6M4.28572 6L0.300021 9.375M0 3.1875L4.89895 6.40244C5.29565 6.66278 5.494 6.79294 5.70976 6.84336C5.90034 6.88789 6.09966 6.88789 6.29024 6.84336C6.50599 6.79294 6.70435 6.66278 7.10104 6.40244L12 3.1875M2.88 10.5H9.12C10.1281 10.5 10.6321 10.5 11.0172 10.3161C11.3559 10.1542 11.6312 9.8961 11.8038 9.57862C12 9.21765 12 8.74509 12 7.8V4.2C12 3.25491 12 2.78237 11.8038 2.42139C11.6312 2.10387 11.3559 1.84571 11.0172 1.68393C10.6321 1.5 10.1281 1.5 9.12 1.5H2.88C1.8719 1.5 1.36786 1.5 0.982815 1.68393C0.644126 1.84571 0.36876 2.10387 0.196188 2.42139C0 2.78237 0 3.25491 0 4.2V7.8C0 8.74509 0 9.21765 0.196188 9.57862C0.36876 9.8961 0.644126 10.1542 0.982815 10.3161C1.36786 10.5 1.8719 10.5 2.88 10.5Z"
				stroke="#161616"
				strokeWidth="0.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PhoneIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M3.51548 4.06246C3.96438 4.99742 4.57632 5.87371 5.3513 6.6487C6.12629 7.42368 7.00258 8.0356 7.93754 8.48456C8.01792 8.52312 8.05816 8.54248 8.10904 8.55728C8.28984 8.61 8.51192 8.57216 8.66504 8.46248C8.70816 8.4316 8.74504 8.39472 8.81872 8.32104C9.04424 8.09552 9.15696 7.98279 9.27032 7.90908C9.69784 7.6311 10.249 7.6311 10.6766 7.90908C10.79 7.98279 10.9027 8.09552 11.1282 8.32104L11.2539 8.44672C11.5966 8.78944 11.768 8.96088 11.8611 9.14488C12.0463 9.51096 12.0463 9.94328 11.8611 10.3094C11.768 10.4934 11.5966 10.6648 11.2539 11.0075L11.1522 11.1092C10.8106 11.4508 10.6398 11.6216 10.4076 11.7521C10.1499 11.8968 9.74976 12.0009 9.45424 12C9.18784 11.9992 9.00584 11.9475 8.64176 11.8442C6.68534 11.2889 4.83919 10.2412 3.29902 8.70096C1.75883 7.16081 0.711094 5.31466 0.155792 3.35821C0.0524627 2.99415 0.000797662 2.81213 5.53294e-06 2.54579C-0.000874016 2.25025 0.1032 1.85005 0.247945 1.59238C0.378389 1.36017 0.549185 1.18938 0.890776 0.847784L0.992448 0.74611C1.33522 0.403345 1.50659 0.231962 1.69066 0.138864C2.05672 -0.046288 2.48902 -0.046288 2.85508 0.138864C3.03914 0.231962 3.21053 0.403345 3.5533 0.74611L3.67898 0.871792C3.90446 1.09728 4.01721 1.21002 4.09092 1.3234C4.3689 1.75094 4.3689 2.30212 4.09092 2.72967C4.01721 2.84304 3.90446 2.95578 3.67898 3.18127C3.60525 3.255 3.56838 3.29186 3.53753 3.33495C3.42788 3.48809 3.39002 3.71013 3.44273 3.89094C3.45756 3.94183 3.47686 3.98204 3.51548 4.06246Z"
				stroke="#161616"
				strokeWidth="0.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/* -------------------------------------------------------------------------- */
/*                           Career Application Modal                         */
/* -------------------------------------------------------------------------- */

export function CareerApplicationModal({
	isOpen,
	onClose,
}: CareerApplicationModalProps) {
	const titleId = useId();

	const panelRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useBodyScrollLock(isOpen);
	useFocusTrap(panelRef, isOpen);

	const handleSuccess = useCallback(() => {
		onClose();
	}, [onClose]);

	/* Escape closes modal */
	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onClose]);

	/* Focus first form field */
	useEffect(() => {
		if (!isOpen || !panelRef.current) return;

		const timer = window.setTimeout(() => {
			const firstField = panelRef.current?.querySelector<HTMLElement>(
				'input[name="firstName"]',
			);

			(firstField ?? closeButtonRef.current)?.focus();
		}, 480);

		return () => {
			window.clearTimeout(timer);
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen ? (
				<>
					{/* Dark backdrop */}
					<motion.button
						key="career-overlay"
						type="button"
						aria-label="Close career application dialog"
						className="fixed inset-0 z-[100] cursor-default bg-[#161616]/50 backdrop-blur-[2px]"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
					/>

					{/* Modal viewport */}
					<div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6">
						<motion.div
							ref={panelRef}
							role="dialog"
							aria-modal="true"
							aria-labelledby={titleId}
							variants={panelVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={(event) => event.stopPropagation()}
							className="
		pointer-events-auto
		relative
		grid
		w-full
		max-w-[1098px]
		overflow-hidden
		bg-[#FAFAFA]
		shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_32px_64px_-12px_rgba(22,22,22,0.22)]
		md:grid-cols-[505px_minmax(0,1fr)]
	"
						>
							{/* LEFT SIDE */}
							<div className="relative min-h-[260px] overflow-hidden md:min-h-0">
								<Image
									src="/images/career/form-bg.png"
									alt=""
									fill
									priority
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, 505px"
								/>

								<div className="absolute inset-0 bg-[#BCBDC0]/20" aria-hidden />

								<div className="absolute inset-0 bg-white/80" aria-hidden />

								<div
									className="
				relative
				z-10
				flex
				h-full
				min-h-[260px]
				flex-col
				items-center
				justify-center
				px-6
				py-10
				text-center
				md:min-h-full
				md:px-9
				md:py-12
			"
								>
									<h2
										id={titleId}
										className="
					qs-reg
					text-[30px]
					uppercase
					leading-[1.05]
					tracking-[0.05em]
					text-[#202225]
					md:text-[36px]
				"
									>
										Come Grow With Us
									</h2>

									<p
										className="
					n-book
					mt-8
					max-w-[434px]
					text-[14px]
					leading-[21px]
					text-[#161616]
					md:text-[16px]
					md:leading-[24px]
				"
									>
										The Guardians provide endless opportunities for professional
										growth in promising times like these. A stimulating work
										environment, rich and diverse exposure &amp; inspiring
										leadership are a few reasons that make The Guardians a great
										place to work.
									</p>
								</div>
							</div>

							{/* RIGHT SIDE */}
							<div className="relative min-w-0 bg-[#FAFAFA]">
								{/* Close button */}
								<button
									ref={closeButtonRef}
									type="button"
									onClick={onClose}
									aria-label="Close career application dialog"
									className="
				absolute
				right-5
				top-5
				z-20
				flex
				h-9
				w-9
				cursor-pointer
				items-center
				justify-center
				rounded-full
				bg-black/[0.04]
				text-[#202225]
				transition-colors
				hover:bg-black/[0.08]
			"
								>
									<CloseIcon />
								</button>

								{/* Right content */}
								<div
									className="
				max-h-[90vh]
				overflow-y-auto
				overscroll-contain
				px-5
				pb-7
				pt-16
				scrollbar-none
				sm:px-8
				md:px-9
				md:pb-6
				md:pt-11
			"
								>
									<CareerApplicationForm onSuccess={handleSuccess} />

									{/* HR enquiries */}
									<div className="mt-5 text-center">
										<p className="n-bold text-[11px] leading-[16.5px] tracking-[0.0858em] text-[#161616]">
											For HR Related Enquiries
										</p>

										<div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 xl:gap-x-[50px]">
											<a
												href="mailto:hr@theguardians.com"
												className="n-book flex items-center gap-1 text-[11px] leading-[13.75px] text-[#161616]"
											>
												<MailIcon />
												<span>hr@theguardians.com</span>
											</a>

											<a
												href="tel:02268770076"
												className="n-book flex items-center gap-1 text-[11px] leading-[13.75px] text-[#161616]"
											>
												<PhoneIcon />
												<span>022-68770076</span>
											</a>

											<a
												href="tel:0226877005"
												className="n-book flex items-center gap-1 text-[11px] leading-[13.75px] text-[#161616]"
											>
												<PhoneIcon />
												<span>022-6877005</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</>
			) : null}
		</AnimatePresence>
	);
}
