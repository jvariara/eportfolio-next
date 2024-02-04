import * as z from "zod";

export const ContactValidation = z.object({
  user_name: z.string().min(1),
  user_email: z.string().email(),
  message: z.string().max(200, { message: "Maximum characters is 200" }),
});
