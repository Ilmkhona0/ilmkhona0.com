# Vercel setup

Vercel builds this project as a Next.js app using `npm run build`. No AWS server, Nginx, PM2, Docker, or AWS credentials are required.

## Required for database-backed features

Add these under **Vercel Project → Settings → Environment Variables**:

- `MONGODB_URI` — MongoDB connection string. Authentication, comments, and account data use MongoDB.
- `AUTH_SECRET` — long random secret used by Auth.js.
- `AUTH_URL` — the production site URL, `https://ilmkhona0.com` after the domain points to Vercel. For preview testing, use the preview URL as appropriate.
- `ADMIN_LOGIN` and `ADMIN_PASSWORD` — seed the initial admin login in MongoDB. Use private values; do not commit them.

`.env.production.example` lists the optional settings too. Never commit actual credentials or `.env` files.

## Optional integrations

- `BLOB_READ_WRITE_TOKEN` enables persistent uploads on Vercel. Without it, upload operations intentionally return an error on Vercel because its function filesystem is not persistent.
- `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_2FA_EMAIL` enable email and admin verification codes.
- `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`, or `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET`, enable social sign-in. Set each provider's callback URL to `https://ilmkhona0.com/api/auth/callback/google` or `/api/auth/callback/github`.
- `GROQ_API_KEY` and optional `GROQ_MODEL` enable AI chat and transcription.
- `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, and optional `CLOUDFLARE_IMAGE_MODEL` enable image generation through Cloudflare's API.
- `NEXT_PUBLIC_ADSENSE_CLIENT`, `NEXT_PUBLIC_GA_ID`, and `NEXT_PUBLIC_GOOGLE_ADS_ID` enable the corresponding Google features.

The MongoDB, email, AI, and Blob credentials are external service integrations. They work with Vercel but may have their own account limits or charges.

## Domain

The domain can stay registered at Vercel. When ready, attach `ilmkhona0.com` to this Vercel project and use the exact DNS records Vercel shows. DNS changes are separate from this code copy.