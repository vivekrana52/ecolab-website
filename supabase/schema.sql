-- ============================================================
-- ECOLAB Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- ============================================================
-- TABLES
-- ============================================================

-- Users table (extends Supabase auth.users)
create table public.users (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  name text,
  plan text default 'free',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Products table
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  niche_slug text not null,
  name text not null,
  description text,
  price integer not null, -- in cents
  tier text not null check (tier in ('starter', 'pro', 'enterprise')),
  active boolean default true,
  created_at timestamptz default now() not null
);

-- Purchases table
create table public.purchases (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  product_id uuid references public.products(id) not null,
  payment_id text not null,
  gateway text not null check (gateway in ('razorpay', 'stripe')),
  status text not null default 'pending' check (status in ('pending', 'completed', 'failed', 'refunded')),
  amount integer not null, -- in cents
  currency text default 'usd',
  created_at timestamptz default now() not null
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.users enable row level security;
alter table public.products enable row level security;
alter table public.purchases enable row level security;

-- Users: users can read/update their own data
create policy "Users can view own data"
  on public.users for select
  using (auth.uid() = id);

create policy "Users can update own data"
  on public.users for update
  using (auth.uid() = id);

-- Products: anyone can read active products
create policy "Anyone can view products"
  on public.products for select
  using (true);

-- Purchases: users can view their own purchases
create policy "Users can view own purchases"
  on public.purchases for select
  using (auth.uid() = user_id);

-- Service role can do everything (for API routes / webhooks)
create policy "Service role full access users"
  on public.users for all
  using (auth.role() = 'service_role');

create policy "Service role full access products"
  on public.products for all
  using (auth.role() = 'service_role');

create policy "Service role full access purchases"
  on public.purchases for all
  using (auth.role() = 'service_role');

-- ============================================================
-- TRIGGER: auto-create user profile on signup
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- INDEXES
-- ============================================================

create index idx_purchases_user_id on public.purchases(user_id);
create index idx_purchases_status on public.purchases(status);
create index idx_products_niche_slug on public.products(niche_slug);
create index idx_products_tier on public.products(tier);
