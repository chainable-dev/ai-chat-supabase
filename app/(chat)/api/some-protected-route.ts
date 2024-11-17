import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '../../../lib/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Fetch user data from user_data
  const { data: userData, error: userDataError } = await supabase
    .from('user_data')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (userDataError) {
    return res.status(500).json({ error: 'Failed to fetch user data' });
  }

  res.status(200).json({ message: 'Authorized access', userData });
} 