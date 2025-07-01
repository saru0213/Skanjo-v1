export interface ApiKeyRequest {
  email: string;
  adminUsername: string;
  adminPassword: string;
}

export interface ApiKeyResponse {
  api_key: string;
  message?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  position: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  position: string;
  api_key: string;
  is_active: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  position: string;
  api_key: string;
  is_active: boolean;
}

export interface UpdateUserProfileRequest {
  industry: string;
  company_size: string;
  country: string;
  job_title: string;
  website: string;
  linkedin_url: string;
  how_did_you_hear: string;
  interested_features: string;
  marketing_opt_in: boolean;
}

export interface UpdateUserProfileResponse {
  success: boolean;
  message?: string;
}

export interface UserAnalyticsItem {
  endpoint: string;
  request_data: string;
  response_data: string;
  status_code: number;
  timestamp: string;
}

export interface CreateFeatureKeyRequest {
  scopes: string[];
}

export interface CreateFeatureKeyResponse {
  feature_key: string;
  message?: string;
}

const API_BASE_URL = "https://screening-api.skanjo.com";
const LOCAL_API_BASE_URL = "http://localhost:8000";

export const createApiKey = async ({
  email,
  adminUsername,
  adminPassword,
}: ApiKeyRequest): Promise<ApiKeyResponse> => {
  const authString = btoa(`${adminUsername}:${adminPassword}`);

  const response = await fetch(`${API_BASE_URL}/add-client`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ client_email: email }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "API key creation failed");
  }

  return data;
};

export async function registerUser(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await fetch(`${LOCAL_API_BASE_URL}/api/v1/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }
  return result;
}

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${LOCAL_API_BASE_URL}/api/v1/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }
  return result;
}

export async function updateUserProfile(
  apiKey: string,
  data: UpdateUserProfileRequest
): Promise<UpdateUserProfileResponse> {
  const response = await fetch(`${LOCAL_API_BASE_URL}/api/v1/users/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Profile update failed");
  }
  return result;
}

export async function getUserAnalytics(
  apiKey: string
): Promise<UserAnalyticsItem[]> {
  const response = await fetch(`${LOCAL_API_BASE_URL}/api/v1/users/analytics`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }
  return await response.json();
}

export async function createFeatureKey(apiKey: string, scopes?: string[], plan: string = 'free'): Promise<CreateFeatureKeyResponse> {
  const envScopes = typeof import.meta !== 'undefined' && import.meta.env.VITE_FEATURE_KEY_SCOPES
    ? JSON.parse(import.meta.env.VITE_FEATURE_KEY_SCOPES)
    : ["enhance_jd", "extract_and_match_jd_cv"];
  const bodyScopes = scopes || envScopes;
  const url = `${LOCAL_API_BASE_URL}/api/v1/users/feature-key?plan=${encodeURIComponent(plan)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ scopes: bodyScopes }),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Feature key creation failed');
  }
  return result;
}
