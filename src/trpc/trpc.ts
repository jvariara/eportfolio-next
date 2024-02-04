import { initTRPC } from "@trpc/server";

// serve the purpose of giving router that lets us define api endpoints on backend
const t = initTRPC.context().create();

export const router = t.router;
// so anyone can call these endpoints
export const publicProcedure = t.procedure;