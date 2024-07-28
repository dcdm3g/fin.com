import type { NextRequest } from 'next/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/lib/trpc/routers/_app'
import { createTRPCContext } from '@/lib/trpc/trpc'

function handler(req: NextRequest) {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => createTRPCContext({ headers: req.headers }),
	})
}

export { handler as GET, handler as POST }
