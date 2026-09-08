create extension if not exists pgcrypto;

create type public.reading_status as enum ('want_to_read', 'reading', 'finished');
create type public.goal_period as enum ('annual', 'monthly', 'custom');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  favourite_genres text[] not null default '{}',
  public_leaderboard_opt_in boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.books (
  id uuid primary key default gen_random_uuid(),
  isbn text unique,
  title text not null,
  author text not null,
  cover_url text,
  page_count integer check (page_count is null or page_count > 0),
  publication_date text,
  publisher text,
  created_at timestamptz not null default now()
);

create table public.user_books (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id uuid not null references public.books(id) on delete cascade,
  status public.reading_status not null default 'want_to_read',
  start_date date,
  finish_date date,
  rating integer check (rating between 1 and 5),
  review text,
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, book_id)
);

create table public.reading_goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  period public.goal_period not null default 'annual',
  year integer not null,
  month integer check (month between 1 and 12),
  starts_on date,
  ends_on date,
  target_books integer not null check (target_books > 0),
  target_pages integer check (target_pages is null or target_pages > 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reading_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  user_book_id uuid not null references public.user_books(id) on delete cascade,
  read_on date not null default current_date,
  pages_read integer not null check (pages_read > 0),
  note text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.books enable row level security;
alter table public.user_books enable row level security;
alter table public.reading_goals enable row level security;
alter table public.reading_sessions enable row level security;

create policy "profiles are readable when public leaderboard is enabled" on public.profiles for select using (public_leaderboard_opt_in = true or auth.uid() = id);
create policy "users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "users can update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "authenticated users can read book metadata" on public.books for select to authenticated using (true);
create policy "authenticated users can insert book metadata" on public.books for insert to authenticated with check (true);
create policy "users can manage own library" on public.user_books for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users can manage own goals" on public.reading_goals for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users can manage own reading sessions" on public.reading_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create view public.public_leaderboard_month as select p.id as profile_id, p.display_name, p.avatar_url, count(ub.id)::integer as books_read from public.profiles p join public.user_books ub on ub.user_id = p.id where p.public_leaderboard_opt_in = true and ub.status = 'finished' and ub.finish_date >= date_trunc('month', current_date)::date group by p.id, p.display_name, p.avatar_url;
create view public.public_leaderboard_year as select p.id as profile_id, p.display_name, p.avatar_url, count(ub.id)::integer as books_read from public.profiles p join public.user_books ub on ub.user_id = p.id where p.public_leaderboard_opt_in = true and ub.status = 'finished' and ub.finish_date >= date_trunc('year', current_date)::date group by p.id, p.display_name, p.avatar_url;
create view public.public_goal_progress as select p.id as profile_id, p.display_name, p.avatar_url, rg.year, rg.target_books, count(ub.id)::integer as books_read, round((count(ub.id)::numeric / rg.target_books::numeric) * 100)::integer as percent_complete from public.profiles p join public.reading_goals rg on rg.user_id = p.id left join public.user_books ub on ub.user_id = p.id and ub.status = 'finished' and extract(year from ub.finish_date) = rg.year where p.public_leaderboard_opt_in = true and rg.period = 'annual' and rg.is_active = true group by p.id, p.display_name, p.avatar_url, rg.year, rg.target_books;

create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$ begin insert into public.profiles (id, display_name) values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1))); return new; end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
