"use server";

import { Resend } from "resend";
import { notificationHtml } from "./email-template";

export type ActionState = {
  success: boolean;
  error?: string;
} | null;

const TO_EMAIL = "connect@mnblockchain.org";
// send.mnblockchain.org is verified in Resend (DNS records live at Squarespace
// under the "send" prefix, separate from the Workspace email records).
const FROM_EMAIL = "MNblockchain <noreply@send.mnblockchain.org>";

async function send(subject: string, text: string, html: string, replyTo?: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[contact form — no RESEND_API_KEY set]", subject, text);
    return { success: true } as const;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });
  // The Resend SDK returns errors instead of throwing, so surface them here or
  // the visitor sees "success" while nothing is delivered.
  if (error) {
    console.error("[resend send failed]", error);
    throw new Error(error.message);
  }
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
      notificationHtml({
        heading: "New contact message",
        fields: [
          { label: "Name", value: name },
          { label: "Email", value: email },
        ],
        message,
      }),
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
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !company) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    await send(
      `New sponsor inquiry from ${company}`,
      `Name: ${name}\nEmail: ${email}\nOrganization: ${company}\n\nMessage:\n${message || "—"}`,
      notificationHtml({
        heading: "New sponsor inquiry",
        fields: [
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "Organization", value: company },
        ],
        message: message || undefined,
      }),
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
    await send(
      `New newsletter signup`,
      `Email: ${email}`,
      notificationHtml({ heading: "New newsletter signup", fields: [{ label: "Email", value: email }] })
    );
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
