import { FaListUl, FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import Button from "../../../components/ui/button/button";
import type { FilterOption, FiltersProps } from "../service/type";
import styles from "./filters.module.css";
import { MdInfoOutline } from "react-icons/md";
import useTaskStore from "../store/task-store";
import { today } from "../service/utils";

const Filters = ({ active, onChange }: FiltersProps) => {
  const { tasks } = useTaskStore((state) => state);

  const filterOptions: FilterOption[] = [
    { label: "All", value: "all", icon: FaListUl, count: tasks.length },
    {
      label: "Pending",
      value: "pending",
      icon: FaRegClock,
      count: tasks.filter((task) => task.status === "pending").length,
    },
    {
      label: "Completed",
      value: "completed",
      icon: FaRegCheckCircle,
      count: tasks.filter((task) => task.status === "completed").length,
    },
    {
      label: "Overdue",
      value: "overdue",
      icon: MdInfoOutline,
      count: tasks.filter(
        (task) => task.status === "pending" && task.dueDate < today()
      ).length,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {filterOptions.map(({ label, value, icon: Icon, count }) => (
        <Button
          variant={active === value ? "primary" : "text"}
          key={value}
          onClick={() => onChange(value)}
        >
          <Icon size={16} />
          <span>{label}</span>
          <span>({count})</span>
        </Button>
      ))}
    </div>
  );
};

export default Filters;
