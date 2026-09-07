"use client";

import {
	BookVisitFormField,
	BookVisitMessageField,
	BookVisitSelectField,
} from "@/components/marketing/visit-lead-modal/BookVisitFormFields";
import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import { uploadFile } from "@/src/api/services/fileService";
import {
	submitBookVisit,
	type CreateBookVisitPayload,
} from "@/src/api/services/visitService";
import { showError, showSuccess } from "@/src/utils/toast";
import { useId, useState, type ChangeEvent, type FormEvent } from "react";

const APPLYING_FOR_OPTIONS = [
	"Senior Sales Manager",
	"Channel Partner Manager",
	"Real Estate Analyst",
	"Market Intelligence Specialist",
	"Marketing Manager",
	"HR Executive",
	"Operations Manager",
	"Advisory Consultant",
	"Other",
];

export type CareerApplicationFormProps = {
	onSuccess: () => void;
};

export function CareerApplicationForm({
	onSuccess,
}: CareerApplicationFormProps) {
	const formId = useId();

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		applyingFor: "",
		message: "",
	});
	const [resumeFile, setResumeFile] = useState<File | null>(null);
	const [resumeFileName, setResumeFileName] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0] ?? null;
		setResumeFile(file);
		setResumeFileName(file?.name ?? "");
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!form.firstName.trim()) {
			showError("First name is required.");
			return;
		}
		if (!form.email.trim()) {
			showError("Email is required.");
			return;
		}
		if (!form.phone.trim()) {
			showError("Phone number is required.");
			return;
		}

		let cvFileId: number | null = null;

		if (resumeFile) {
			try {
				const formData = new FormData();
				formData.append("file", resumeFile);
				formData.append("file_type", "cv");
				const uploadResult = await uploadFile(formData);
				cvFileId =
					(uploadResult as { data?: { id?: number } })?.data?.id ?? null;
			} catch {
				showError("Failed to upload resume. Please try again.");
				return;
			}
		}

		const payload: CreateBookVisitPayload = {
			first_name: form.firstName.trim(),
			last_name: form.lastName.trim() || null,
			email: form.email.trim(),
			phone_no: form.phone.trim(),
			location: null,
			upload_cv_file_id: cvFileId,
			message: form.message.trim() || null,
		};

		try {
			setIsSubmitting(true);
			await submitBookVisit(payload);
			showSuccess("Application submitted successfully.");
			onSuccess();
		} catch (error) {
			showError(
				error instanceof Error ? error.message : "Something went wrong.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form
			id={formId}
			onSubmit={handleSubmit}
			className="w-full text-left"
			noValidate
			aria-busy={isSubmitting}
		>
			<div className="flex flex-col gap-3">
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<BookVisitFormField
						label="First Name"
						name="firstName"
						placeholder="Enter your first name"
						value={form.firstName}
						onChange={handleChange}
						id={`${formId}-firstName`}
						required
					/>
					<BookVisitFormField
						label="Last Name"
						name="lastName"
						placeholder="Enter your last name"
						value={form.lastName}
						onChange={handleChange}
						id={`${formId}-lastName`}
					/>
				</div>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<BookVisitFormField
						label="Email Address"
						name="email"
						placeholder="Enter your email address"
						value={form.email}
						onChange={handleChange}
						type="email"
						id={`${formId}-email`}
						required
					/>
					<BookVisitFormField
						label="Phone Number"
						name="phone"
						placeholder="Enter your phone number"
						value={form.phone}
						onChange={handleChange}
						type="tel"
						id={`${formId}-phone`}
						required
					/>
				</div>

				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<BookVisitSelectField
						label="Applying For"
						name="applyingFor"
						placeholder="Choose role"
						value={form.applyingFor}
						onChange={handleSelectChange}
						options={APPLYING_FOR_OPTIONS}
						id={`${formId}-applyingFor`}
					/>
					<div className="flex flex-col gap-1 text-left">
						<label
							htmlFor={`${formId}-resume`}
							className="text-left n-bold text-xs uppercase tracking-[0.08em] text-brand-text-primary"
						>
							Resume
						</label>
						<div className="border-b border-[#8F8183]/70 bg-white/60 pb-2 pt-0.5 transition-colors focus-within:border-[#f07c61]">
							<label
								htmlFor={`${formId}-resume`}
								className="flex cursor-pointer items-center"
							>
								<span
									className={`n-reg text-sm ${
										resumeFileName ? "text-[#202020]" : "text-[#202020]/40"
									}`}
								>
									{resumeFileName || "Upload your CV"}
								</span>
								<input
									id={`${formId}-resume`}
									type="file"
									accept=".pdf,.doc,.docx"
									onChange={handleFileChange}
									className="hidden"
								/>
							</label>
						</div>
					</div>
				</div>

				<BookVisitMessageField
					name="message"
					value={form.message}
					onChange={handleChange}
					id={`${formId}-message`}
				/>

				<div className="mt-1 flex justify-center">
					<OutlineArrowButton
						type="submit"
						form={formId}
						disabled={isSubmitting}
						aria-disabled={isSubmitting}
						className="h-[46px] w-full max-w-full uppercase disabled:cursor-not-allowed disabled:opacity-70 sm:h-[48px] sm:text-sm bg-[#161616] text-white hover:bg-[#2a2626]"
						iconClassName="h-[12px] w-[12px]"
						iconAlt=""
					>
						{isSubmitting ? "Submitting..." : "Submit"}
					</OutlineArrowButton>
				</div>
			</div>
		</form>
	);
}
