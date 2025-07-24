// src/utils/api.ts
export const getBackendUrl = (): string => {
  // Use environment variable with fallback to localhost for development
  return import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
};

export interface ApiRequestOptions extends RequestInit {
  // This makes `body` optionally a typed object
  body?: string | FormData | null;
}

export const apiRequest = async <T = any>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> => {
  const backendUrl = getBackendUrl();
  const token = localStorage.getItem("token");

  const defaultOptions: ApiRequestOptions = {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
  };

  try {
    const response = await fetch(`${backendUrl}${endpoint}`, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
