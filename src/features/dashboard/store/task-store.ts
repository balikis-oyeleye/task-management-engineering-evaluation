import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TaskType } from "../service/type";

type TaskStoreState = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (taskId: string, updatedTask: Partial<TaskType>) => void;
  deleteTask: (taskId: string) => void;
  selectedTask?: TaskType;
  setSelectedTask?: (task: TaskType | undefined) => void;
  clearSelectedTask?: () => void;
};

const useTaskStore = create<TaskStoreState>()(
  persist(
    (set) => ({
      tasks: [],
      selectedTask: undefined,
      setSelectedTask: (task) => set({ selectedTask: task }),
      clearSelectedTask: () => set({ selectedTask: undefined }),
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      updateTask: (taskId, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: "task-management-store",
    }
  )
);

export default useTaskStore;
