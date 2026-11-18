export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_URL?.trim();
  return new URL(configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"));
}