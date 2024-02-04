import { getPayloadClient } from "../get-payload";
import { publicProcedure, router } from "./trpc";

// THIS FILE IS OUR BACKEND
// our api endpoints go into this router
export const appRouter = router({
  getAllProjects: publicProcedure.query(async () => {
    // get projects from db
    const payload = await getPayloadClient();

    const { docs: projects } = await payload.find({
      collection: "projects",
      depth: 1,
    });

    return { projects };
  }),
});

export type AppRouter = typeof appRouter;
