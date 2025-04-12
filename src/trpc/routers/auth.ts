import { auth } from '@/src/app/api/auth/[...nextauth]/route';
import { publicProcedure } from '../server';

export const authRouter = {
  getSession: publicProcedure.query(async () => {
    const session = await auth();
    return session;
  }),
};