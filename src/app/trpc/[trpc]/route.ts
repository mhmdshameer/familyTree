'use client';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../trpc/routers/_app';

export const GET = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
export const POST = GET;