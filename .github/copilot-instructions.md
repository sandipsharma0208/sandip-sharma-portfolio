# Portfolio project notes

- Use Next.js App Router, TypeScript, and Tailwind CSS. Prefer Server Components; add Client Components only for interaction.
- Keep portfolio content in `data/portfolio.ts` and reuse its data in UI and generated resume output.
- Follow the CSS variables and responsive patterns in `app/globals.css`; keep font sizes on fixed breakpoints.
- Do not invent personal contact details, project URLs, or project capabilities. Keep optional LinkedIn/email in environment variables.
- Contact delivery requires the Resend settings documented in `.env.example` and `README.md`; never show success without a successful delivery response.
- Run `npm run lint` and `npm run build` after code changes. The build script uses Webpack for the current Windows WASM compiler environment.
