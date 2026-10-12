"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { getAllCareerApplications } from "@/src/api/services/careerApplicationService";
import { useEffect, useState } from "react";

type CareerApplicationApiItem = {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  phone_no: string;
  applying_for: string | null;
  message: string | null;
  cv_file_url: string | null;
  created_at: string;
  updated_at: string;
};

type CareerApplicationsResponse = {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    data: CareerApplicationApiItem[];
  };
};

function formatApplicationDate(value: string) {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.25 6.75-5.25 5.25 5.25 5.25"
      />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 6.75 5.25 5.25-5.25 5.25"
      />
    </svg>
  );
}

function fullName(application: CareerApplicationApiItem) {
  return [application.first_name, application.last_name ?? ""].join(" ").trim();
}

export function CareerApplicationsPageContent() {
  const [applications, setApplications] = useState<CareerApplicationApiItem[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadApplications() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const result = (await getAllCareerApplications({
          per_page: 6,
          page: currentPage,
        })) as CareerApplicationsResponse;

        if (!isMounted) return;

        setApplications(result.data.data ?? []);
        setLastPage(Math.max(1, result.data.last_page));
      } catch (error) {
        if (!isMounted) return;

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Failed to load career applications.",
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadApplications();

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  function goToPage(page: number) {
    if (page < 1 || page > lastPage) return;
    setCurrentPage(page);
  }

  return (
    <section className="min-h-[420px] w-full space-y-4">
      {errorMessage ? (
        <ScrollReveal direction="up" distance={20}>
          <div className="rounded-[20px] border border-[#f3d3cb] bg-[#fff6f3] px-5 py-4 text-[1rem] font-medium text-[#c25b45]">
            {errorMessage}
          </div>
        </ScrollReveal>
      ) : null}

      <ScrollReveal direction="up" delay={0.04} distance={20}>
        <section className="overflow-hidden rounded-[30px] border border-[#e7e4df] bg-white shadow-[0_8px_18px_rgba(22,20,19,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1280px]">
              <thead className="border-b border-[#e9edf3] bg-white">
                <tr className="text-left">
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    ID
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Name
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Date
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Email
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Phone
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Applying For
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    Message
                  </th>
                  <th className="px-4 py-4 text-[0.95rem] font-semibold text-[#111827] sm:px-5">
                    CV
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-14 text-center text-[1.05rem] text-[#6b7280]"
                    >
                      Loading career applications...
                    </td>
                  </tr>
                ) : applications.length > 0 ? (
                  applications.map((application) => (
                    <tr
                      key={application.id}
                      className="border-b border-[#eef2f6] transition-colors hover:bg-[#f8fafc] last:border-b-0"
                    >
                      <td className="px-4 py-4 align-top text-[0.9rem] font-medium text-[#4b5563] sm:px-5">
                        {application.id}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.94rem] font-semibold text-[#161b22] sm:px-5">
                        {fullName(application) || "Unnamed Applicant"}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] text-[#4b5563] sm:px-5">
                        {formatApplicationDate(application.created_at)}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] text-[#4b5563] sm:px-5">
                        {application.email}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] text-[#4b5563] sm:px-5">
                        {application.phone_no}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] text-[#4b5563] sm:px-5">
                        {application.applying_for || "Not selected"}
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] text-[#4b5563] sm:px-5">
                        <p className="max-w-[320px] line-clamp-2">
                          {application.message || "No message provided."}
                        </p>
                      </td>
                      <td className="px-4 py-4 align-top text-[0.9rem] sm:px-5">
                        {application.cv_file_url ? (
                          <a
                            href={application.cv_file_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-[12px] border border-[#dbe2ec] bg-[#f8fafc] px-3 py-1.5 font-medium text-[#526178] transition hover:bg-[#eef3fa]"
                          >
                            Download CV
                          </a>
                        ) : (
                          <span className="text-[#8b95a7]">No CV</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-14 text-center text-[1.05rem] text-[#6b7280]"
                    >
                      No career applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={0.08}
        className="flex items-center justify-center gap-2.5"
      >
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-[#e6eaf0] bg-white text-[#6b7280] transition hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous page"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>

        {Array.from({ length: lastPage }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              className={[
                "inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] text-[0.98rem] font-semibold transition",
                currentPage === page
                  ? "btn-primary-gradient text-white"
                  : "border border-[#e6eaf0] bg-white text-[#111827] hover:bg-[#f8fafc]",
              ].join(" ")}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-[#e6eaf0] bg-white text-[#6b7280] transition hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next page"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>
      </ScrollReveal>
    </section>
  );
}
