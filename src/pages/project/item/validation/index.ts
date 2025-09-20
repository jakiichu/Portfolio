import { z } from "zod";

const projectValidation = z.object({
  id: z.string(),
});

export { projectValidation };
