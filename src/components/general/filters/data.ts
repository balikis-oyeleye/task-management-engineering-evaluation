import { FaListUl, FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import type { FilterOption } from "./type";

export const filterOptions: FilterOption[] = [
  { label: "All", value: "all", icon: FaListUl, count: 0 },
  { label: "Pending", value: "pending", icon: FaRegClock, count: 3 },
  { label: "Completed", value: "completed", icon: FaRegCheckCircle, count: 5 },
  {
    label: "Overdue",
    value: "overdue",
    icon: MdInfoOutline,
    count: 2,
  },
];
