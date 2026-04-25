-- Migration: add is_featured, is_published, home_order; add freelance category; fix enums
-- Run this in: https://supabase.com/dashboard/project/iupgehvkwqfjqsajsrgn/sql
-- Safe to re-run.

-- 1. New columns
ALTER TABLE projects
  ADD COLUMN IF NOT EXISTS is_featured  BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_published BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS home_order   INTEGER;

-- 2. category = CHECK constraint (not enum) — drop and re-add with 'freelance'
ALTER TABLE projects
  DROP CONSTRAINT IF EXISTS projects_category_check;

ALTER TABLE projects
  ADD CONSTRAINT projects_category_check
    CHECK (category IN ('published_apps', 'personal_projects', 'contract_work', 'freelance'));

-- 3. project_type = ENUM — add missing values with IF NOT EXISTS
ALTER TYPE project_type_enum ADD VALUE IF NOT EXISTS 'Flutter App';
ALTER TYPE project_type_enum ADD VALUE IF NOT EXISTS 'Backend';
ALTER TYPE project_type_enum ADD VALUE IF NOT EXISTS 'DSA';

-- 4. Verify
SELECT id, title, category, project_type, is_featured, is_published, home_order
FROM projects
ORDER BY display_order;
