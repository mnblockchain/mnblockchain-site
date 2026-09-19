const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Branded notification email sent to the MNblockchain team when a form is
// submitted. All visitor-provided text is escaped before going into the HTML.
export function notificationHtml({
  heading,
  fields,
  message,
}: {
  heading: string;
  fields: { label: string; value: string }[];
  message?: string;
}) {
  const rows = fields
    .map(
      (f) => `
        <tr>
          <td style="padding:8px 0;width:110px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#6b7280;vertical-align:top;">${escapeHtml(f.label)}</td>
          <td style="padding:8px 0;font-size:15px;color:#0b0e11;">${escapeHtml(f.value)}</td>
        </tr>`
    )
    .join("");

  const messageBlock = message
    ? `
      <div style="margin-top:20px;padding:18px;background-color:#f5f7fa;border-radius:12px;font-size:15px;line-height:1.65;color:#374151;">
        ${escapeHtml(message).replace(/\n/g, "<br>")}
      </div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background-color:#f5f7fa;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f7fa;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:560px;max-width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;">
          <tr>
            <td style="background-color:#0b0e11;padding:20px 28px;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
              <span style="color:#6495ed;">MN</span><span style="color:#ffffff;">blockchain</span>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <div style="font-size:20px;font-weight:700;color:#0b0e11;">${escapeHtml(heading)}</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">${rows}
              </table>${messageBlock}
              <div style="margin-top:24px;font-size:12px;color:#9ca3af;">Sent from the mnblockchain.org website.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
