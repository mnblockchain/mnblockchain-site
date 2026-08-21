"use server";

import { Resend } from "resend";

export type ActionState = {
  success: boolean;
  error?: string;
} | null;

const TO_EMAIL = "connect@mnblockchain.org";
// Requires a verified sending domain in Resend before this will actually deliver.
const FROM_EMAIL = "MNblockchain <noreply@send.mnblockchain.org>";

async function send(subject: string, text: string, html: string, replyTo?: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[contact form — no RESEND_API_KEY set]", subject, text);
    return { success: true } as const;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });
  return { success: true } as const;
}

export async function submitContact(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill out all fields." };
  }

  try {
    await send(
      `New message from ${name} via MNblockchain.org`,
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><br /><p>${message.replace(/\n/g, "<br />")}</p>`,
      email
    );
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitSponsorInquiry(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const tier = (formData.get("tier") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !company) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    await send(
      `New sponsor inquiry from ${company}`,
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTier interest: ${tier || "—"}\n\nMessage:\n${message || "—"}`,
      `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Tier:</strong> ${tier || "—"}</p><br /><p>${(message || "—").replace(/\n/g, "<br />")}</p>`,
      email
    );
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitNewsletter(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = (formData.get("email") as string)?.trim();

  if (!email) {
    return { success: false, error: "Please enter an email address." };
  }

  try {
    await send(`New newsletter signup`, `Email: ${email}`, `<p><strong>Email:</strong> ${email}</p>`);
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
