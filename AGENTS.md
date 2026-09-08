<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# BookBesties Tracker

## Product Principles

BookBesties Tracker is a mobile-first reading journal and social reading tracker for the Polish BookBesties community, primarily women aged 18-29. The product should feel personal, warm, editorial, and playful: closer to a beloved reading notebook than a generic SaaS dashboard.

The default language is Polish. Interface copy should be friendly, concise, and community-aware without becoming childish.

Prioritize fast mobile interactions, clear ownership of reading data, beautiful book-cover presentation, journal-like empty states, and social features that expose only public display name, avatar, and intentional public stats.

Avoid generic SaaS dashboard visuals, dense desktop-first tables, public exposure of private shelves/reviews/sessions/raw identity, and decoration that makes progress harder to scan.

## Design System

Brand colors: Burgundy `#7A1038`, Gold `#F5C842`, Cream `#FFF8EC` and `#F6EAD6`, Dark typography `#191417`.

Editorial headings use a Playfair Display-inspired serif stack. UI, forms, and metrics use a clean modern sans-serif stack.

Use cream paper surfaces, burgundy anchors, gold highlights, book covers, subtle dotted or handwritten-feeling details. Mobile bottom navigation should feel native and thumb-friendly. Desktop adapts with side navigation.

## Engineering Conventions

Stack: Next.js App Router, TypeScript, Tailwind CSS, Supabase Auth and Postgres.

Auth routes live in `src/app/(auth)`. Main app routes live in `src/app/(app)`. Use `src/proxy.ts` for request-time auth gating in Next.js 16.

`supabase/schema.sql` is the source of truth for tables, RLS, and public leaderboard views. User-owned reading data must include `user_id` and be protected with RLS policies using `auth.uid()`. Leaderboards must use public-safe views or RPCs.

Keep reusable UI in `src/components/ui`, feature components grouped by product area, and prefer server components unless interactivity is needed.
