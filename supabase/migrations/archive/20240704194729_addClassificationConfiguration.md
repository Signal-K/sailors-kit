-- Add the classificationType column
ALTER TABLE public.classifications
ADD COLUMN classificationConfiguration jsonb null;
