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
