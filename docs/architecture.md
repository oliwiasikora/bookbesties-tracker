# BookBesties Tracker Architecture

## Application

- `src/app/(app)` contains authenticated mobile application routes.
- `src/app/(auth)` contains registration, login, and password reset screens.
- `src/components/app-shell` owns shared navigation.
- `src/components/dashboard`, `src/components/books`, and `src/components/auth` hold feature components.
- `src/lib/supabase` contains browser/server Supabase clients and environment checks.
- `supabase/schema.sql` is the database source of truth.

## Routing

- `/home` - dashboard
- `/moje-ksiazki` - personal shelves
- `/dodaj` - search or ISBN scan entry point
- `/ranking` - public community rankings
- `/profil` - profile
- `/login`, `/rejestracja`, `/reset-hasla` - authentication

## Data Model

`profiles`, `books`, `user_books`, `reading_goals`, and `reading_sessions` support the first release. Private reading data is guarded by RLS policies keyed to `auth.uid()`. Leaderboards should read from public-safe views only.
