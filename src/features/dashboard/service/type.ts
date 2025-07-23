export type TaskType = {
  id: string;
  title: string;
  description?: string;
  status: string;
  dueDate: string;
  createdAt: string;
  priority: string;
};

import type { IconType } from "react-icons";

type Status = "all" | "pending" | "completed" | "overdue";

export type FiltersProps = {
  active: string;
  onChange: (status: Status) => void;
};

export type FilterOption = {
  label: string;
  value: Status;
  icon: IconType;
  count: number;
};

export type ModalState = {
  toggleModal: () => void;
  isOpen: boolean;
};

export type ThemeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export type TaskProps = {
  filter: string;
  search: string;
};
