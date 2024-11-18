'use server';

import { z } from 'zod';
import { createClient } from '../../lib/supabase/server';

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export interface LoginActionState {
  status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
}

export const login = async (
  _: LoginActionState,
  formData: FormData
): Promise<LoginActionState> => {
  try {
    const validatedData = authFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const supabase = await createClient();

    // Attempt to sign in
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email: validatedData.email,
      password: validatedData.password,
    });

    if (error) {
      console.error('Login error:', error.message);
      return { status: 'failed' };
    }

    // Fetch additional user data from user_data
    const { data: userData, error: userDataError } = await supabase
      .from('user_data')
      .select('*')
      .eq('id', user?.id)
      .single();

    if (userDataError) {
      console.error('Error fetching user data:', userDataError.message);
      return { status: 'failed' };
    }

    console.log('Logged in user:', { ...user, ...userData });

    return { status: 'success' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return { status: 'invalid_data' };
    }

    console.error('Unexpected error:', error);
    return { status: 'failed' };
  }
};

export interface RegisterActionState {
  status:
    | 'idle'
    | 'in_progress'
    | 'success'
    | 'failed'
    | 'user_exists'
    | 'invalid_data';
}

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string(),
  profilePictureUrl: z.string().optional()
});

export const register = async (
  _: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> => {
  try {
    const validatedData = registerFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
      fullName: formData.get('fullName'),
      profilePictureUrl: formData.get('profilePictureUrl')
    });

    const supabase = await createClient();

    // Sign up new user
    const { data: { user }, error } = await supabase.auth.signUp({
      email: validatedData.email,
      password: validatedData.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.error('Sign-up error:', error.message);
      return { status: 'failed' };
    }

    // Insert user data into users table
    const { error: insertError } = await supabase
      .from('users')
      .insert({
        id: user?.id,
        username: validatedData.email.split('@')[0], // Example username logic
        email: validatedData.email,
      });

    if (insertError) {
      console.error('Error inserting user data:', insertError.message);
      return { status: 'failed' };
    }

    return { status: 'success' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return { status: 'invalid_data' };
    }

    console.error('Unexpected error:', error);
    return { status: 'failed' };
  }
};

export const signInWithGoogle = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Error signing in with Google:', error.message);
  }
};
