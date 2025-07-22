import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import styles from "./header.module.css";
import { FiPlus } from "react-icons/fi";
import Button from "../../../components/ui/button/button";
import useModalStore from "../store/modal-store";

const Header = () => {
  const toggleModal = useModalStore((state) => state.toggleModal);

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
        <Button variant="text">
          <IoSunny />
        </Button>
        <Button onClick={toggleModal}>
          <FiPlus size={16} />
          <span>New New Task</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
