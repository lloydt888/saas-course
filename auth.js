// /assets/js/auth.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://lwaaamofbppfbpntvera.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3YWFhbW9mYnBwZmJwbnR2ZXJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg1NDQ4NywiZXhwIjoyMDk3NDMwNDg3fQ.zAOqpidik6RpZkg26YdncANw-9ZNZHPNTu0tfFxWe3k';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    flowType: 'pkce',              // use Authorization Code + PKCE flow
    detectSessionInUrl: true       // automatically handle ?code=... after redirect
  }
});
