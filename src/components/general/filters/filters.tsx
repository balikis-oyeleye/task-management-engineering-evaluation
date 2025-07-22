import Button from "../../ui/button/button";
import styles from "./filters.module.css";
import type { FiltersProps } from "./type";
import { filterOptions } from "./data";

const Filters = ({ active, onChange }: FiltersProps) => {
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
