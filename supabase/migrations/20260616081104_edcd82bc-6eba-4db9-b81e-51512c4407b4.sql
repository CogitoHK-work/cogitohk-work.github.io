CREATE TABLE public.partner_interests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  region text,
  interest_type text NOT NULL CHECK (interest_type IN ('partner', 'franchisee', 'both')),
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.partner_interests TO anon;
GRANT INSERT ON public.partner_interests TO authenticated;
GRANT ALL ON public.partner_interests TO service_role;

ALTER TABLE public.partner_interests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anyone to submit interest form" ON public.partner_interests FOR INSERT WITH CHECK (true);
CREATE POLICY "Only service_role can read submissions" ON public.partner_interests FOR SELECT USING (false);
CREATE POLICY "Only service_role can update or delete" ON public.partner_interests FOR ALL USING (false) WITH CHECK (false);