-- BuildXAI Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable pgcrypto extension for UUID generation
create extension if not exists "pgcrypto";

-- ============================================
-- Table: projects
-- Purpose: Portfolio/demo cards shown on frontend
-- Public access: SELECT only (read-only)
-- ============================================
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  demo_link text not null,
  created_at timestamptz not null default now()
);

-- ============================================
-- Table: inquiries
-- Purpose: Lead capture from public form
-- Public access: INSERT only (write-only)
-- ============================================
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text null,
  service_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- ============================================
-- Row Level Security (RLS) Setup
-- ============================================

-- Enable RLS on projects table
alter table public.projects enable row level security;

-- Enable RLS on inquiries table
alter table public.inquiries enable row level security;

-- Policy: Public can READ all projects
-- Anyone can view the portfolio projects
create policy "Public can read projects"
on public.projects
for select
using (true);

-- Policy: Public can INSERT into inquiries
-- Anyone can submit inquiry forms (no auth required)
create policy "Public can insert inquiries"
on public.inquiries
for insert
with check (true);

-- ============================================
-- Indexes for Performance
-- ============================================

-- Index on projects created_at for sorting
create index if not exists idx_projects_created_at
on public.projects (created_at desc);

-- Index on inquiries created_at for admin sorting
create index if not exists idx_inquiries_created_at
on public.inquiries (created_at desc);

-- ============================================
-- Optional: Add comments for documentation
-- ============================================
comment on table public.projects is 'Portfolio projects displayed on the website. Managed by owner via Supabase dashboard.';
comment on table public.inquiries is 'Lead form submissions from website visitors. Public can insert, only admins should view.';
