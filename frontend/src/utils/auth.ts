import { UserData } from '@/types/auth';
import jwt from 'jsonwebtoken';

export const decodeToken = (token: string): UserData | null => {
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.decode(token) as UserData;
    return decoded;
  } catch (error) {
    console.error('Failed to decode token', error);
    return null;
  }
};