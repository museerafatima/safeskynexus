const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let detail = "Something went wrong. Please try again.";
    try {
      const data = await response.json();
      if (data?.detail) detail = data.detail;
    } catch {
      // ignore parse errors, use default message
    }
    throw new Error(detail);
  }

  return response.json();
}