export async function verifyCaptcha(token: string): Promise<boolean> {
  if (process.env.NODE_ENV === "development") return true;
  if (process.env.SKIP_RECAPTCHA === "true") return true;

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  return data.success === true;
}
