export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed" | "canceled";
  dueDate: string;
  createdAt: string;
  priority: "low" | "medium" | "high";
};
