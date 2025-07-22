import { z } from "zod";

export const taskDataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.string(),
  dueDate: z.string(),
  priority: z.string(),
});

export type TaskDataType = z.infer<typeof taskDataSchema>;
