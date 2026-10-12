import { isAxiosError } from "axios";
import { normalizeApiError } from "@/src/utils/apiErrorHandler";
import { axiosInstance } from "../axiosInstance";
import { buildQueryString } from "../params";

export type CareerApplicationPayload = {
  first_name: string;
  last_name: string | null;
  email: string;
  phone_no: string;
  applying_for: string | null;
  upload_cv_file_id: number | null;
  message: string | null;
};

export type GetCareerApplicationsParams = {
  per_page?: number;
  page?: number;
};

export type CareerApplicationRecord = {
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

export type CareerApplicationCreateResponse = {
  success: boolean;
  message: string;
  data: CareerApplicationRecord;
};

export function createCareerApplication(payload: CareerApplicationPayload) {
  return axiosInstance
    .post<CareerApplicationCreateResponse>("/career-applications", payload, {
      headers: { "Content-Type": "application/json" },
    })
    .then((r) => r.data);
}

export async function submitCareerApplication(
  payload: CareerApplicationPayload,
): Promise<CareerApplicationCreateResponse> {
  try {
    const result = await createCareerApplication(payload);

    if (!result?.success) {
      throw new Error(result?.message || "Failed to submit application.");
    }

    return result;
  } catch (error) {
    if (error instanceof Error && !isAxiosError(error)) {
      throw error;
    }
    const { message } = normalizeApiError(error);
    throw new Error(message);
  }
}

export function getAllCareerApplications(
  params: GetCareerApplicationsParams = {},
) {
  const query = buildQueryString({
    per_page: params.per_page ?? 10,
    page: params.page ?? 1,
  });

  return axiosInstance
    .get<unknown>(`/career-applications?${query}`)
    .then((r) => r.data);
}
