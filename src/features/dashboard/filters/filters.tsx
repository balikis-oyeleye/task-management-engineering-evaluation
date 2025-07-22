import Button from "../../../components/ui/button/button";
import { filterOptions } from "../service/data";
import type { FiltersProps } from "../service/type";
import styles from "./filters.module.css";

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
