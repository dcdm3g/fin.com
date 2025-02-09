import { mergeRouters } from '@/server/trpc'
import { accountRouter } from '@/server/routers/account'
import { investmentsRouter } from '@/server/routers/investments'
import { invoicesRouter } from '@/server/routers/invoices'
import { goalsRouter } from '@/server/routers/goals'

export const appRouter = mergeRouters(
	accountRouter,
	investmentsRouter,
	invoicesRouter,
	goalsRouter,
)

export type AppRouter = typeof appRouter
