import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className={styles.searchWrapper}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
        placeholder="Search tasks..."
        className={styles.input}
      />
    </div>
  );
};

export default Search;
