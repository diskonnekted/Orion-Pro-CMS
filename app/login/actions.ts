'use server';

import { pool } from '@/lib/db';
import { createSession, deleteSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Please enter both username and password.' };
  }

  try {
    // Check if user exists (by username or email)
    const [rows] = await pool.query(
      'SELECT ID, user_login, user_pass, user_email FROM orion_users WHERE user_login = ? OR user_email = ?', 
      [username, username]
    );

    const users = rows as any[];

    if (users.length === 0) {
      return { error: 'Invalid username or password.' };
    }

    const user = users[0];

    // Verify password
    // Note: PHP password_hash uses bcrypt, so bcryptjs should work.
    // PHP hashes often start with $2y$, which bcryptjs might verify correctly or need replacement.
    // We replace $2y$ with $2a$ just in case bcryptjs is strict.
    const validPassword = await bcrypt.compare(password, user.user_pass.replace(/^\$2y\$/, '$2a$'));

    if (!validPassword) {
      return { error: 'Invalid username or password.' };
    }

    // Create session
    await createSession(user.ID);

  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An error occurred during login.' };
  }
  
  redirect('/admin');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
