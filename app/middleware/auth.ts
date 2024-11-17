import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../lib/supabase/server';

export async function middleware(req: NextRequest) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
} 