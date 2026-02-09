'use server';

import { pool } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { randomBytes } from 'crypto';

export async function createDevice(formData: FormData) {
  const name = formData.get('name') as string;
  const type = formData.get('type') as string || 'esp32';
  
  // Generate a secure random token
  const token = randomBytes(16).toString('hex');

  try {
    await pool.query(
      'INSERT INTO orion_iot_devices (name, type, token) VALUES (?, ?, ?)',
      [name, type, token]
    );
    
    revalidatePath('/admin/iot');
    return { success: true, token }; // Return token so we can show it to user once
  } catch (error) {
    console.error('Failed to create device:', error);
    return { success: false, error: 'Failed to create device' };
  }
}

export async function deleteDevice(formData: FormData) {
  const id = formData.get('id');
  
  try {
    await pool.query('DELETE FROM orion_iot_devices WHERE id = ?', [id]);
    revalidatePath('/admin/iot');
    return { success: true };
  } catch (error) {
    console.error('Failed to delete device:', error);
    return { success: false, error: 'Failed to delete device' };
  }
}

export async function getDevices() {
  try {
    const [rows] = await pool.query('SELECT * FROM orion_iot_devices ORDER BY created_at DESC');
    return rows as any[];
  } catch (error) {
    console.error('Failed to get devices:', error);
    return [];
  }
}
