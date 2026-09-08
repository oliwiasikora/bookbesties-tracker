# BookBesties Tracker

Mobilny dziennik czytelniczy i społecznościowy tracker dla polskiej społeczności BookBesties.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth + Postgres
- Netlify-ready deployment config

## Local Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/home`.

## Environment

Copy `.env.example` to `.env.local` and add Supabase values:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Supabase

Run `supabase/schema.sql` in Supabase SQL Editor.

## Netlify

This repo includes `netlify.toml`.

Netlify settings:

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `22`

Add the same Supabase environment variables in Netlify before production use.
