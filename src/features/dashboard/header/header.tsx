import { FaRegCalendarCheck } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import styles from "./header.module.css";
import { FiPlus } from "react-icons/fi";
import Button from "../../../components/ui/button/button";
import useModalStore from "../store/modal-store";
import useThemeStore from "../store/theme-store";
import { useEffect } from "react";

const Header = () => {
  const toggleModal = useModalStore((state) => state.toggleModal);
  const { theme, toggleTheme } = useThemeStore((state) => state);

  const applyTheme = () => {
    toggleTheme();

    document.documentElement.setAttribute("data-portfolio-color-scheme", theme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute(
        "data-portfolio-color-scheme",
        theme
      );
    }
  }, [theme]);

  return (
    <header className={styles.header}>
      <div>
        <FaRegCalendarCheck className={styles.taskLogo} />
        <div>
          <h1>Task Management Dashboard</h1>
          <p>Organize and manage your tasks</p>
        </div>
      </div>
      <div className={styles.headerCta}>
        {
          <Button variant="text" onClick={applyTheme}>
            {theme === "light" ? <IoMoon size={24} /> : <IoSunny size={24} />}
          </Button>
        }
        <Button onClick={toggleModal}>
          <FiPlus size={16} />
          <span>New New Task</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
