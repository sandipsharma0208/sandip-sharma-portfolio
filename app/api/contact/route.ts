import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/data/portfolio";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Please submit a valid message." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) return Response.json({ message: "Please check the form fields and try again." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL || profile.email;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) return Response.json({ message: "Message delivery is not configured yet. Please try again later." }, { status: 503 });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: sender, to: [recipient], reply_to: parsed.data.email, subject: `[Portfolio] ${parsed.data.subject}`, text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}` }),
      cache: "no-store",
    });
    if (!response.ok) return Response.json({ message: "The email service could not accept your message. Please try again later." }, { status: 502 });
    return Response.json({ message: "Message sent." }, { status: 200 });
  } catch {
    return Response.json({ message: "The email service is temporarily unavailable. Please try again later." }, { status: 502 });
  }
}