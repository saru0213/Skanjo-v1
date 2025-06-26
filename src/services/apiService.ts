export interface ApiKeyRequest {
  email: string;
  adminUsername: string;
  adminPassword: string;
}

export interface ApiKeyResponse {
  api_key: string;
  message?: string;
}

export const createApiKey = async ({
  email,
  adminUsername,
  adminPassword,
}: ApiKeyRequest): Promise<ApiKeyResponse> => {
  const authString = btoa(`${adminUsername}:${adminPassword}`);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/add-client`, {
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
