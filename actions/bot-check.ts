// Cheap anti-spam for the public forms. Real visitors never see the hidden
// field and take more than a couple of seconds to fill a form; bots fill every
// field and submit instantly (or never run the page's JavaScript at all).
const MIN_SECONDS = 2;
const MAX_HOURS = 24;

export function isBot(formData: FormData): boolean {
  const trap = formData.get("hp_field");
  if (typeof trap === "string" && trap.trim() !== "") return true;

  const startedAt = Number(formData.get("form_started"));
  if (!startedAt) return true;

  const elapsed = (Date.now() - startedAt) / 1000;
  if (elapsed < MIN_SECONDS || elapsed > MAX_HOURS * 3600) return true;

  return false;
}
