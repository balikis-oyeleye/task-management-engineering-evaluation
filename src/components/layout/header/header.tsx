import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <FaRegCalendarCheck className={styles.taskLogo} />
        <div>
          <h1>Task Management Dashboard</h1>
          <p>Organize and manage your tasks</p>
        </div>
      </div>
      <button>
        <IoSunny />
      </button>
    </header>
  );
};

export default Header;
