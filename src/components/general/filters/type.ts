import type { IconType } from "react-icons";

type Status = "all" | "pending" | "completed" | "overdue";

export type FiltersProps = {
  active: Status;
  onChange: (status: Status) => void;
};

export type FilterOption = {
  label: string;
  value: Status;
  icon: IconType;
  count: number;
};
