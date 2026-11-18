## Sandip Sharma Portfolio

A responsive Next.js App Router portfolio for Sandip Sharma, built with TypeScript, Tailwind CSS, Framer Motion, Lucide, React Hook Form and Zod. Portfolio content lives in `data/portfolio.ts` and is rendered mostly on the server.

## Run locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run lint` and `npm run build` to validate changes. The build script uses Webpack for compatibility with the current Windows runtime's WASM-only Next.js compiler.

## Contact delivery

The contact form validates in the browser and on the server. To deliver messages, copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: Resend API key.
- `CONTACT_TO_EMAIL`: optional inbox that receives form submissions; defaults to Sandip's public contact email.
- `CONTACT_FROM_EMAIL`: verified sender address in Resend.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional public email link.
- `NEXT_PUBLIC_LINKEDIN_URL`: optional LinkedIn profile URL.
- `NEXT_PUBLIC_SITE_URL`: canonical production origin, for example `https://portfolio.example.com`. Vercel's `VERCEL_URL` is used as a fallback.

Without Resend credentials, the contact route returns a configuration error and the UI does not report a false success. The public email is `sandipsharma0206@gmail.com`; LinkedIn remains optional because its URL was not supplied.

## Resume

The resume download links serve the uploaded file at `/Sandip_Sharma_Resume.pdf` directly from `public/`.

## Deploy

Deploy to Vercel with the same environment variables. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL so sitemap and metadata use the correct origin.
